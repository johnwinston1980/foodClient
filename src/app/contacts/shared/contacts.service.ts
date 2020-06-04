import { Injectable } from '@angular/core';

import { Contact } from '../shared/contact'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactsCollection: AngularFirestoreCollection<any>;
  contactDoc: AngularFirestoreDocument<any>;
  contacts: Observable<any[]>

  uid: string

  cont: Contact = {}

  constructor(
    private afs: AngularFirestore,
    private broadcast: BroadcastObjectServiceService
  ) {
  }

  init() {
    this.uid = localStorage.getItem('uid')

    console.log(this.uid)

    this.contactsCollection = this.afs.collection(`users/${this.uid}/contacts`);

    this.contacts = this.contactsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Contact;
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  getContacts() {
    return this.contacts
  }

  /*addContact2(): Contact{    
    return this.cont
  }*/

  /*addContact3(contact: Contact): void{
    this.afs.collection(`contacts`).add(contact)
  }*/

  addContact(contact: Contact): any {

    const uid = localStorage.getItem('uid')
    console.log(uid)

    //const collection = this.afs.collection(`contacts/${providerId}/list`);
    const collection = this.afs.collection(`users/${uid}/contacts`).add(contact).then(success => {
      console.log(success)
    }).catch(error => {
      console.log(error)
    })    
  }

}