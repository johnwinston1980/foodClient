import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { AuthService } from '../shared/auth.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: any
  url: string
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }



  ngOnInit() {

    this.url = this.router.url
    
  }

  login(){
    this.authService.confirmSignIn(this.email, this.url)
  }

}
