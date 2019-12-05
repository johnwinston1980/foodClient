import { Component, OnInit } from '@angular/core';

import { ProvidersService } from '../shared/providers.service'

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.css']
})
export class ListProvidersComponent implements OnInit {

  providers: any;

  constructor(private providersService: ProvidersService) { 
        
  }

  ngOnInit() {
    this.providersService.getProviders().subscribe(providers => {
      this.providers = providers;
    })
  }

}