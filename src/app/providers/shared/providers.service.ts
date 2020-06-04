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


  constructor(private afs: AngularFirestore) {


  }

  addProvider(provider: any): any {

    const uid = localStorage.getItem('uid')
    console.log(uid)

    this.afs.collection('users').doc(uid).set(provider).then(success => {
      console.log('user updated correctly!')
    }).catch(error => {
      console.log(error)
    })

  }

  /*initCategories(providerId: string){
    this.categoriesCollection = this.afs.collection(`categories/${providerId}/list`);
    this.categories = this.categoriesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Category;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }*/

  /*getProviders() {
    return this.providers
  }

  getCategories(){
    return this.categories
  }*/

}