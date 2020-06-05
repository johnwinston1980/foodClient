import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Router } from '@angular/router'

import { DispatcherService } from '../../dispatcher/shared/dispatcher.service'

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

import { ProvidersService } from '../shared/providers.service'

import { AuthService } from '../../users/shared/auth.service'


@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.css']
})
export class NewProviderComponent implements OnInit {

  provinces: any
  towns: any  
  users: any

  providerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    roles: new FormControl(`['provider']`),
    prov: new FormControl('', [Validators.required]),
    town: new FormControl('', [Validators.required])    
  })

  constructor(private router: Router,
    private dispatcherService: DispatcherService,
    private broadcast: BroadcastObjectServiceService,
    private provService: ProvidersService,
    private authService: AuthService) { }

  ngOnInit() {

    this.authService.init()

    this.authService.getUsers().subscribe(users => {
      console.log('users = ' + users[0].email)
      this.users = users

    })
    
    /*this.dispatcherService.getProvinces().subscribe(provinces => {
      //this.provinces = provinces
      console.log('subscribe')
      console.log(provinces)
      this.broadcast.broadcastProvinces(provinces)
    })*/

    /*this.broadcast.provincesList.subscribe(provinces => {
      console.log('broadcast')
      console.log(provinces)
      this.provinces = provinces
    })*/

  }

  onChangeofProvince(province) {       
    /*this.dispatcherService.loadTowns(this.providerForm.controls['prov'].value)
    this.dispatcherService.getTowns().subscribe(towns => {
      this.towns = towns      
    })*/
  }  



  onSubmit(){

    

    //this.providerForm.setValue({roles: ['provider']})
    

    console.log(this.providerForm.value)

    //this.provService.addProvider(this.providerForm.value)    
  }

}
