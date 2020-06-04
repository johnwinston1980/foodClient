import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../shared/dispatcher.service'

import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-new-province',
  templateUrl: './new-province.component.html',
  styleUrls: ['./new-province.component.css']
})
export class NewProvinceComponent implements OnInit {

  provinceForm = new FormGroup({
    name: new FormControl('', Validators.required),    
  })

  constructor(private service: DispatcherService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(province: string){
    this.service.addProvince(this.provinceForm.value)
    //this.router.navigate(['list-provinces'])
  }

}
