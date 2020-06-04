import { Component, OnInit } from '@angular/core';

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-sender',
  templateUrl: './main-sender.component.html',
  styleUrls: ['./main-sender.component.css']
})
export class MainSenderComponent implements OnInit {

  constructor(
    private broadcast: BroadcastObjectServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.broadcast.rolesList.subscribe(roles => {
      if (roles != null) {

        roles.forEach(element => {
          if (element == 'provider') {
            this.router.navigate(['list-contacts'])
          }
        });

      }

    })
  }

  newContact(){
    this.router.navigate(['new-contact'])
  }

  listContact(){
    this.router.navigate(['list-contacts'])
  }

  listTransfers(){
    this.router.navigate(['list-transfers'])
  }

}
