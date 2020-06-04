import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router'

import { Provider } from '../shared/provider' 

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service' 

import { ImagesService } from '../../shared/images.service'

import { Upload } from '../../shared/upload'

@Component({
  selector: 'app-details-provider',
  templateUrl: './details-provider.component.html',
  styleUrls: ['./details-provider.component.css']
})
export class DetailsProviderComponent implements OnInit {

  provider: Provider
  images: Upload[] = []

  constructor(private router: Router, private broadCastObjectService: BroadcastObjectServiceService,
    private imagesService: ImagesService) {
        
  }

  /*getImages(images){
    images.forEach(element => {
      console.log(element.url)
          
    });    
  }*/

  /*rowHeight(): number{
    return this.images.length > 1 ? 100 : 180;    
  }*/

  ngOnInit() {    
    this.broadCastObjectService.currentProvider.subscribe(provider => {
      this.provider = provider      
    })
  }

  newProvince(){
    this.router.navigate(['new-dispatcher'])
  } 
  
  newTown(){
    this.router.navigate(['new-town'])
  }

}
