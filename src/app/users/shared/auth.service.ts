import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { auth, User } from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
//import { User } from 'firebase';

import { AccessGuard } from '../../shared/access.guard'

import { switchMap, map } from 'rxjs/operators'

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //user: User;
  //user$: Observable<User>
  users: Observable<any[]>
  usersCollection: AngularFirestoreCollection<any>

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public router: Router,
    private broadcast: BroadcastObjectServiceService,
    private accessGuard: AccessGuard
  ) {
   
    
  }

  init(){
    this.usersCollection = this.afs.collection(`/users`)    
    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data()
        return data
      })
    })
  }

  getUsers(){
    return this.users
  }


  async confirmSignIn(email, url){
    
    if(this.afAuth.auth.isSignInWithEmailLink(url)){

      console.log('isSignInWithEmailLink = true')

      await this.afAuth.auth.signInWithEmailLink(email , url).then(success => {
        
        console.log(success)
        console.log('success')
        this.router.navigate(['main-provider'])
        
        //update database


      }).catch(error => {
        console.log(error)
      })

    }
    else{

      console.log('isSignInWithEmailLink = false')

    }

  }


  async login(email: string, password: string) {

    const routerAux = this.router
    const broadcastAux = this.broadcast
    var flag = false
    var uid = ''

    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (firebaseUser) {

      //broadcastAux.broadcastUser(firebaseUser.user)

      console.log('succesfully logged in callback function()')

      //localStorage.setItem('user', JSON.stringify(firebaseUser.user));
      flag = true
      //this.loadRoles(firebaseUser.user.uid)
      uid = firebaseUser.user.uid
      localStorage.setItem('uid', firebaseUser.user.uid);

      //routerAux.navigate(['main-sender'])

    }).catch(function (error) {
      broadcastAux.broadcastError(error)
      routerAux.navigate(['error-register'])
    }).finally(() => {
      console.log('finally loadRoles()')
      if (flag) {
        this.loadRoles(uid)
      }
    })
  }


  loadRoles(uid: string) {
    this.getRoles(uid).subscribe(roles => {         
      if (roles != null) {        
        localStorage.setItem('roles', JSON.stringify(roles.roles));
        this.accessGuard.redirect()
      }
      else{
        console.log('roles = null')
      }
    })
  }

  getRoles(uid: string) {
    const userDoc = this.afs.doc(`users/${uid}`)
    return userDoc.get().pipe(
      map(snapshot => {
        const user = snapshot.data();
        return user;
      })
    );
  }


  async registerInvitation(email: string){

    const actionCodeSettings = {
      url: 'http://localhost:4201/forgot-password',
      handleCodeInApp: true
    }
    
    await this.afAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings).then(success => {
      console.log(success)
    }).catch(error => {
      console.log(error)
    })

  }


  async register(email: string, password: string) {

    const routerAux = this.router
    const broadcastAux = this.broadcast
    let userData: any

  //  this.afAuth.auth.se

    
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (result) {
      
      userData = result.user      

    }).catch(function (error) {

      broadcastAux.broadcastError(error)
      routerAux.navigate(['error-register'])
      

    }).finally(() => {
      this.addUser(userData)
    })
    //this.sendEmailVerification();
  }


  addUser(userdata) {
    var user = {
      roles: ['sender'],
      email: userdata.email
    }
    this.afs.collection(`users`).doc(userdata.uid).set(user).then((result) => {
      console.log(`user added`)
      console.log(result)
      this.router.navigate(['login'])
    })
  }


  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  /*async logout() {
    await this.afAuth.auth.signOut().then(success => {
      //this.broadcast.broadcastRoles(null)
      
      localStorage.removeItem('user');
      this.router.navigate(['login']);

    })
  }*/

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  /*async  loginWithGoogle() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['admin/list']);
  }*/

}
