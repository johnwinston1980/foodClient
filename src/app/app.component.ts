import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';

import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { User } from '../app/shared/user'

import { ImagesService } from "../app/shared/images.service"

import { AccessGuard } from '../app/shared/access.guard'

import { BroadcastObjectServiceService } from '../app/shared/broadcast-object-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'foodClient';
  @ViewChild("drawer", { static: false })
  public drawer: MatDrawer;

  //userAuthState: Observable<firebase.User>;
  //user: User = {}

  //localStorage.setItem('user', JSON.stringify(this.user));
  //localStorage.removeItem('user');

  constructor
    (
      private afAuth: AngularFireAuth,
      private router: Router,
      private imagesService: ImagesService,
      private broadcast: BroadcastObjectServiceService,
      private accessGuard: AccessGuard
    ) {

    //this.userAuthState = afAuth.authState

    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('just logged in or logged in app component')
        //localStorage.setItem('user', JSON.stringify(user));

        this.accessGuard.redirect()
        

      } else {
        console.log('just logged out or is logged out app component')
        //localStorage.setItem('user', null);
        //this.router.navigate(['login'])
      }
    })
  }


  ngOnInit() {

  }

  eventCallBack(event: string) {
    if (event == 'close') {
      this.drawer.close()
    }
    else if (event == 'toggle') {
      this.drawer.toggle()
    }
  }

  googleLogin() {
    return this.socialSignIn(new firebase.auth.GoogleAuthProvider());
  }

  facebookLogin() {
    return this.socialSignIn(new firebase.auth.FacebookAuthProvider());
  }


  private async socialSignIn(provider: firebase.auth.AuthProvider): Promise<void> {
    try {
      const credential = await (await this.afAuth.auth.signInWithPopup(provider));
      //this.updateUserData(credential.user);
    }
    catch (error) {
      return console.log(error);
    }
  }

  logout() {
    this.afAuth.auth.signOut().then((success) => {
      this.drawer.close()
      this.broadcast.broadcastRoles(null)
      localStorage.setItem('roles', null)
      this.router.navigate(['login']);
    }
    ).catch((err) => {
      console.log(err);
    });
  }

  login() {
    this.router.navigate(['login'])
    this.drawer.close()
  }

  register() {
    this.router.navigate(['register'])
    this.drawer.close()
  }

  createContact() {
    this.router.navigate(['new-contact'])
    this.drawer.close()
  }

  listTransfers() {
    this.router.navigate(['list-transfers'])
    this.drawer.close()
  }

  newProvince() {
    this.router.navigate(['new-province'])
    this.drawer.close()
  }

  listContacts() {
    this.router.navigate(['list-contacts'])
    this.drawer.close()
  }

}