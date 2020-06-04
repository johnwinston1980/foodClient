import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { ProvidersService } from '../shared/providers.service'
import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.css']
})
export class ListProvidersComponent implements OnInit, OnDestroy {

  providers: any;  

  constructor(private providersService: ProvidersService, private router: Router, 
    private broadCastObjectService: BroadcastObjectServiceService) { 
                   
  }

  ngOnInit() {   

    /*this.providersService.getProviders().subscribe(providers => {        
      this.broadCastObjectService.broadcastProvidersList(providers)
    })

    this.broadCastObjectService.providersList.subscribe(providers => {      
      this.providers = providers
    })*/

  }

  ngOnDestroy(){
    
  }

  openProvider(provider){    
    /*this.broadCastObjectService.broadcastProvider(provider)
    this.router.navigate(['details-provider'], provider);   */ 
  }

}