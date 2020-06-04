import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { ContactsService } from '../shared/contacts.service'
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contacts: any

  constructor(
    private contactsService: ContactsService, 
    private router: Router, 
    private broadcastObjectService: BroadcastObjectServiceService) {   
    
  }

  ngOnInit() {
    // init contacts first
    this.contactsService.init()

    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts
      this.broadcastObjectService.broadcastContactsList(contacts)
    })
    this.broadcastObjectService.contactsList.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  newTransfer(contact : any){
    this.broadcastObjectService.broadcastContact(contact)
    this.router.navigate(['new-transfer'])
  }

}
