import { Component, OnInit } from '@angular/core';
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-register-error',
  templateUrl: './register-error.component.html',
  styleUrls: ['./register-error.component.css']
})

export class RegisterErrorComponent implements OnInit {

  error: any

  constructor(
    private broadcast: BroadcastObjectServiceService
  ) { }

  ngOnInit() {
    this.broadcast.currentError.subscribe(error => {
      this.error = error
    })
  }

}
