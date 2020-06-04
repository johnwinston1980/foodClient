import { Component, OnInit } from '@angular/core';

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

import { Transfer } from '../shared/transfer'

@Component({
  selector: 'app-details-transfer',
  templateUrl: './details-transfer.component.html',
  styleUrls: ['./details-transfer.component.css']
})
export class DetailsTransferComponent implements OnInit {

  transfer: Transfer = {
    contact: {}
  }


  constructor(private broadcast: BroadcastObjectServiceService) { }

  ngOnInit() {
    this.broadcast.currentTransfer.subscribe(transfer => {
      this.transfer = transfer
    })
  }

}
