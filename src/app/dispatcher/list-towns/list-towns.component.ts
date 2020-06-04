import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../shared/dispatcher.service'
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-list-towns',
  templateUrl: './list-towns.component.html',
  styleUrls: ['./list-towns.component.css']
})
export class ListTownsComponent implements OnInit {

  towns: any

  constructor(private service: DispatcherService, 
    private broadcast: BroadcastObjectServiceService,
    private router: Router) {

  }

  ngOnInit() {
    this.broadcast.currentProvince.subscribe(province => {
      this.service.loadTowns(province.name)
      this.service.getTowns().subscribe(towns => {
        this.towns = towns
        this.broadcast.broadcastTownsList(towns)
      })
    }) 
    this.broadcast.townsList.subscribe(towns => {
      this.towns = towns
    })
  }

  newDispatcher(town: any){
    this.broadcast.broadcastTown(town)    
    this.router.navigate(['new-dispatcher'])
  }
}