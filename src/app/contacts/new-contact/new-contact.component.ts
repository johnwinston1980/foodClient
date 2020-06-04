import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'


import { ContactsService } from '../shared/contacts.service'
import { DispatcherService } from '../../dispatcher/shared/dispatcher.service'

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  provinces: any
  towns: any  

  contactProfileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl(''),
    prov: new FormControl('', [Validators.required]),
    town: new FormControl('', [Validators.required]),
    address: new FormControl('', Validators.required)
  })


  constructor(private contactsService: ContactsService,
    private router: Router,
    private dispatcherService: DispatcherService,
    private broadcast: BroadcastObjectServiceService) {

  }

  ngOnInit() {
    this.contactProfileForm.controls['phone'].setValue('+53')

    this.dispatcherService.getProvinces().subscribe(provinces => {
      this.provinces = provinces
      this.broadcast.broadcastProvinces(provinces)
    })

    this.broadcast.provincesList.subscribe(provinces => {
      this.provinces = provinces
    })
  }

  onChangeofProvince(province) {       
    this.dispatcherService.loadTowns(this.contactProfileForm.controls['prov'].value)
    this.dispatcherService.getTowns().subscribe(towns => {
      this.towns = towns      
    })
  }  

  onSubmit() {    
    this.contactsService.addContact(this.contactProfileForm.value)
    this.router.navigate(['list-contacts'])
  }

}