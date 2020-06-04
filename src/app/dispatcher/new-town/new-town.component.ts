import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../shared/dispatcher.service'

import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-new-town',
  templateUrl: './new-town.component.html',
  styleUrls: ['./new-town.component.css']
})
export class NewTownComponent implements OnInit {

  province: any

  townForm = new FormGroup({
    name: new FormControl('', Validators.required)       
  })

  constructor(private service: DispatcherService,
    private router: Router,
    private broadcast: BroadcastObjectServiceService) { }

  ngOnInit() {
    this.broadcast.currentProvince.subscribe(province => {
      this.province = province
    })
  }

  onSubmit(town: string){
    this.service.addTown(this.province.name, this.townForm.value)
    //this.router.navigate(['list-provinces'])
  }

}
