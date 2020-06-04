import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../shared/dispatcher.service'
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

import { Router } from '@angular/router'

import provinces from '../../shared/provinces.json'

@Component({
  selector: 'app-list-provinces',
  templateUrl: './list-provinces.component.html',
  styleUrls: ['./list-provinces.component.css']
})

export class ListProvincesComponent implements OnInit {

  prov: any

  constructor(private service: DispatcherService, 
    private broadcast: BroadcastObjectServiceService,
    private router: Router) {

  }

  ngOnInit() {
    this.prov = provinces.provinces
    /*this.service.getProvinces().subscribe(provinces => {
      this.provinces = provinces
      this.broadcast.broadcastProvinces(provinces)
    })
    this.broadcast.provincesList.subscribe(provinces => {
      this.provinces = provinces
    })*/
  }


  newTown(province: any){
    this.broadcast.broadcastProvince(province)
    this.router.navigate(['new-town'])
  }

}
