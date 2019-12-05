import { Injectable } from '@angular/core';

import { Provider } from './provider';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProvidersService {


  providersCollection: AngularFirestoreCollection<any>;
  providerDoc: AngularFirestoreDocument<any>;
  providers: Observable<any[]>

  constructor (private afs: AngularFirestore) {

    this.providersCollection = this.afs.collection(`providers`);

    this.providers = this.providersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Provider;
        data.id = a.payload.doc.id;
        return data;
      })
    })
    
  }

  getProviders(){
    return this.providers;
  }

}