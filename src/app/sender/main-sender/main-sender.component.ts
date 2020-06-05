import { Component, OnInit } from '@angular/core';

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'
import { Router } from '@angular/router'


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-main-sender',
  templateUrl: './main-sender.component.html',
  styleUrls: ['./main-sender.component.css']
})
export class MainSenderComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Iniciar transferencia', cols: 1, rows: 1, color: '#533cf3', link: 'new-transfer'},
    {text: 'Lista de contactos', cols: 2, rows: 1, color: '#00bb56', link: 'list-contacts'},
    {text: 'Lista de transferencias', cols: 1, rows: 1, color: '#cd1af3', link: 'list-transfers'},
    {text: 'four', cols: 1, rows: 1, color: '#21c2e0', link: ''},
  ];

  constructor(
    private broadcast: BroadcastObjectServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    /*this.broadcast.rolesList.subscribe(roles => {
      if (roles != null) {
        roles.forEach(element => {
          if (element == 'provider') {
            this.router.navigate(['list-contacts'])
          }
        });
      }
    })*/
  }

  goto(url){
    this.router.navigate([url])
  } 

}
