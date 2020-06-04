import { Component, OnInit } from '@angular/core';

import { ProvidersService } from '../shared/providers.service'

import { BroadcastObjectServiceService } from '../../shared/broadcast-object-service.service'

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: any

  constructor(private providersService: ProvidersService, 
    private broadcastObjService: BroadcastObjectServiceService) {

   }

  ngOnInit() {

    /*this.broadcastObjService.currentProvider.subscribe(provider => {
      this.providersService.initCategories(provider.id)
      this.providersService.getCategories().subscribe(categories => {
        this.categories = categories
      })
    })*/

  }

}