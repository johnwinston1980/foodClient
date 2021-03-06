import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Router } from '@angular/router'

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private authService: AuthService,
    private router: Router,    
    private boradcast: BroadcastObjectServiceService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.registerForm.controls['email'].value, this.registerForm.controls['password'].value)
  }

}