import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Contact } from '../../contacts/shared/contact'
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'
import { TransfersService } from '../shared/transfers.service'

export interface Province {
  id: string
  name: string
}

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {

  contact: Contact = {}
  //transfer: any = {}
  provinces: Province[]
  towns: Province[]

  transferForm = new FormGroup({
    amount: new FormControl('', Validators.min(20)),
    status: new FormControl(''),
    uid: new FormControl(''),

    prov: new FormControl(''),
    town: new FormControl(''),

    contact: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    })

  })

  constructor(private broadcastObject: BroadcastObjectServiceService,
    private transfersService: TransfersService,
    private router: Router) { }

  ngOnInit() {

    this.transfersService.getProvinces().subscribe(provinces => {
      this.provinces = provinces
    })




    /*this.broadcastObject.currentContact.subscribe(contact => {
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
    })*/
  }

  onChangeofProvince($event) {
    console.log(this.transferForm.controls['prov'].value)
    this.transfersService.loadTowns(this.transferForm.controls['prov'].value)
    this.transfersService.getTowns().subscribe(towns => {
      this.towns = towns
    })
  }

  onChangeofMunicipio($event) {
    console.log(this.transferForm.controls['town'].value)    
  }

  onSubmit() {
    this.transferForm.controls['status'].setValue('pending')
    this.transferForm.controls['uid'].setValue(localStorage.getItem('uid'))
    console.log(this.transferForm.value)
    this.transfersService.addTransfer(this.transferForm.value)
    this.router.navigate(['list-transfers'])
  }

}