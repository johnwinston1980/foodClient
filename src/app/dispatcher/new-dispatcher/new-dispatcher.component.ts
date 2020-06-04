import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../shared/dispatcher.service'
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

import provinces from '../../shared/provinces.json'

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-dispatcher',
  templateUrl: './new-dispatcher.component.html',
  styleUrls: ['./new-dispatcher.component.css']
})

export class NewDispatcherComponent implements OnInit {

  provinces: any
  towns: any
  dispatcherForm: FormGroup

  constructor(
    private service: DispatcherService,
    private broadcast: BroadcastObjectServiceService,
    private formBuilder: FormBuilder,
    ) {

  }

  ngOnInit() {
    this.provinces = provinces.provinces

    this.dispatcherForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      prov: new FormControl('', [Validators.required]),
      town: new FormControl('', [Validators.required]),
    })
    
  }

  onChangeofProvince(event) {
    this.towns = provinces.provinces[this.dispatcherForm.controls['prov'].value].municipios
  }

  onSubmit() {
    let provincia = provinces.provinces[this.dispatcherForm.controls['prov'].value]
    let prov = JSON.stringify(new Province(provincia.id, provincia.name))

    let municipio = provincia.municipios[this.dispatcherForm.controls['town'].value]
    let mun = JSON.stringify(new Province(municipio.id, municipio.name))


    this.dispatcherForm.controls['prov'].setValue(prov)
    this.dispatcherForm.controls['town'].setValue(mun)

    //console.log(this.dispatcherForm.value)
    this.service.addDispatcher2(this.dispatcherForm.value)
  }
}

class Province {
  id: string
  name: string
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}