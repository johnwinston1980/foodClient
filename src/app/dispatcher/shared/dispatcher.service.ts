import { Injectable } from '@angular/core';

import { Dispatcher } from '../shared/dispatcher'

import { Observable } from 'rxjs'

import { AuthService } from '../../users/shared/auth.service'

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore'

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  provincesCollection: AngularFirestoreCollection<any>
  townsCollection: AngularFirestoreCollection<any>
  provinces: Observable<any[]>
  towns: Observable<any[]>

  constructor(
    private afs: AngularFirestore, 
    private authService: AuthService
    ) { 

    this.provincesCollection = this.afs.collection(`province`)
    
    this.provinces = this.provincesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        //data.id = a.payload.doc.id;
        return data;
      })
    })    

  }

  addDispatcher(province: string, town: string, dispatcher: Dispatcher){
    this.afs.collection(`dispatchers/${province}/${town}`).add(dispatcher)
  }

  addDispatcher2(dispatcher: Dispatcher){
    this.afs.collection(`users/`).doc(dispatcher.email).set(dispatcher).then(success => {
      console.log('user added')
      this.authService.registerInvitation(dispatcher.email)
    })
  }

  addProvince(province: any){
    this.afs.collection(`province`).doc(province.name).set(province)
  }

  addTown(province: string, town: any){    
    this.afs.collection(`province/${province}/towns/`).doc(town.name).set(town)
  }

  loadTowns(province: string){    
    this.townsCollection = this.afs.collection(`province/${province}/towns`)
    this.towns = this.townsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as string
        return data
      })
    })
  }

  getTowns(){
    return this.towns
  }

  getProvinces(){
    return this.provinces
  }

}