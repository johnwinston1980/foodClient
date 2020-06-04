import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Contact } from '../../contacts/shared/contact'
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'
import { TransfersService } from '../shared/transfers.service'


@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {

  contact: Contact = {}
  //transfer: any = {}

  transferForm = new FormGroup({
    amount: new FormControl('', Validators.min(20)),
    status: new FormControl(''),
    uid: new FormControl(''),
    contact: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      prov: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
    })    
  })

  constructor(private broadcastObject: BroadcastObjectServiceService,
    private transfersService: TransfersService,
    private router: Router) { }

  ngOnInit() {
    this.broadcastObject.currentContact.subscribe(contact => {
      this.contact = contact
      this.transferForm.setValue({
        amount: 0,
        status: '',
        uid: '',
        contact: {
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          address: contact.address,
          prov: contact.prov,
          town: contact.town,
        }        
      })
    })
  }

  onSubmit() {
    this.transferForm.controls['status'].setValue('pending')
    this.transferForm.controls['uid'].setValue(localStorage.getItem('uid'))
    console.log(this.transferForm.value)
    this.transfersService.addTransfer(this.transferForm.value)
    this.router.navigate(['list-transfers'])    
  }  

}