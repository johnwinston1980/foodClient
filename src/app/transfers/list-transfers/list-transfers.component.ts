import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router'

import { TransfersService } from '../shared/transfers.service'
import { Observable } from 'rxjs';

import { Transfer } from '../shared/transfer'

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-list-transfers',
  templateUrl: './list-transfers.component.html',
  styleUrls: ['./list-transfers.component.css']
})
export class ListTransfersComponent implements OnInit{

  transfers: Transfer[]

  constructor(private transfService: TransfersService,
    private broadcast: BroadcastObjectServiceService,
    private router: Router) {           

  }


  gotoDetails(transfer: Transfer){
    this.broadcast.broadcastTransfer(transfer)
    this.router.navigate(['details-transfer'])
  }
  

  ngOnInit() {  
    this.transfService.loadUserTransfers()      
    this.transfService.getTransfers().subscribe(transfers => {      
      this.transfers = transfers      
      this.broadcast.broadcastTransferList(this.transfers)
    })

    this.broadcast.transfersList.subscribe(transfers => {     
      this.transfers = transfers
    })

  }

}