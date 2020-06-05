import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router'

import { Provider } from '../shared/provider' 

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service' 

import { ImagesService } from '../../shared/images.service'

import { Upload } from '../../shared/upload'


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-details-provider',
  templateUrl: './details-provider.component.html',
  styleUrls: ['./details-provider.component.css']
})
export class DetailsProviderComponent implements OnInit {

  provider: Provider

  tiles: Tile[] = [
    {text: 'Dispatchers', cols: 1, rows: 1, color: '#533cf3', link: 'new-dispatcher'},
    {text: 'Two', cols: 2, rows: 1, color: '#00bb56', link: ''},
    {text: 'Three', cols: 1, rows: 1, color: '#cd1af3', link: ''},
    {text: 'Four', cols: 1, rows: 1, color: '#21c2e0', link: ''},
  ];

  
  constructor(private router: Router, private broadCastObjectService: BroadcastObjectServiceService,
    private imagesService: ImagesService) {
        
  }

  goto(link){
    this.router.navigate([link])
  }
 

  ngOnInit() {    
    this.broadCastObjectService.currentProvider.subscribe(provider => {
      this.provider = provider      
    })
  }

  /*newProvince(){
    this.router.navigate(['new-dispatcher'])
  } 
  
  newTown(){
    this.router.navigate(['new-town'])
  }*/

}
