import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import { BroadcastObjectServiceService } from '../shared/broadcast-object-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //userName: string = ''
  roles: any

  @Output()
  eventEmitter = new EventEmitter<string>();

  home: boolean = false
  email: string

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private broadcast: BroadcastObjectServiceService
  ) {

    this.afAuth.authState.subscribe(user => {

      if (user) {
        console.log('just logged in navbar')
        this.email = user.email
      }
      else {
        console.log('just logged out navbar')
        this.email = ''
      }
    })


    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        // console.log(this.router.url)
        if (this.router.url == '/list-providers') {
          this.home = false
          console.log('home = false')
        }
        else {
          this.home = true
        }
      }
      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });

  }

  ngOnInit() {
    this.broadcast.rolesList.subscribe(roles => {
      this.roles = roles
    })  
  }

  toggle() {
    this.eventEmitter.emit('toggle');
  }

  goHome() {

    //get roles, check, go apropriate home
    if(this.roles){
      console.log(this.roles)
    }    
    else{
      console.log('no roles')
    }
    //this.router.navigate(['/list-providers'])
  }
}