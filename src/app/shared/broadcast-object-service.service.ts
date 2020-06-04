import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { Provider } from '../providers/shared/provider'

import { Contact } from '../contacts/shared/contact'

import { Transfer } from '../transfers/shared/transfer'

import { User } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class BroadcastObjectServiceService {

  provider: Provider = {}
  contact: Contact = {}
  transfer: Transfer = {
    contact: {}
  }

  
  private errorSource = new BehaviorSubject<any>('')
  currentError = this.errorSource.asObservable()

  /*private userSource = new BehaviorSubject<any>('')
  currentUser = this.userSource.asObservable()*/

  private rolesSource = new BehaviorSubject<any>([])
  rolesList = this.rolesSource.asObservable()
    

  private provincesSource = new BehaviorSubject<any>([])
  private provinceSource = new BehaviorSubject<any>('')
  currentProvince = this.provinceSource.asObservable()
  provincesList = this.provincesSource.asObservable()

  private townsListSource = new BehaviorSubject<any>([])
  private townSource = new BehaviorSubject<any>('')
  currentTown = this.townSource.asObservable()
  townsList = this.townsListSource.asObservable()

  private providerSource = new BehaviorSubject<Provider>(this.provider)
  currentProvider = this.providerSource.asObservable()

  private contactSource = new BehaviorSubject<Contact>(this.contact)
  private contactsListSource = new BehaviorSubject<any>([])
  currentContact = this.contactSource.asObservable()
  contactsList = this.contactsListSource.asObservable()

  private providersSource = new BehaviorSubject<any>([])
  providersList = this.providersSource.asObservable()

  private transferSource =  new BehaviorSubject<Transfer>(this.transfer)
  private transfersSource = new BehaviorSubject<any>([])
  currentTransfer = this.transferSource.asObservable()
  transfersList = this.transfersSource.asObservable()


  constructor() {     
  }

  /*broadcastUser(user: User){
    this.userSource.next(user)
  }*/

  broadcastError(error: any){
    this.errorSource.next(error)
  }

  broadcastRoles(roles: any){
    this.rolesSource.next(roles)
  }

  broadcastTown(town: any){
    this.townSource.next(town)
  }

  broadcastTownsList(towns: any){
    this.townsListSource.next(towns)
  }  

  broadcastProvince(province: any){
    this.provinceSource.next(province)
  }

  broadcastTransfer(transfer: Transfer){
    this.transferSource.next(transfer)
  }

  broadcastTransferList(transfers: any){
    this.transfersSource.next(transfers)
  }

  broadcastProvinces(provinces: any){
    this.provincesSource.next(provinces)
  }

  broadcastProvider(provider: Provider) {
    this.providerSource.next(provider)
  } 
  
  broadcastProvidersList(providers: any) {
    this.providersSource.next(providers)
  } 

  broadcastContact(contact: Contact){
    this.contactSource.next(contact)
  }

  broadcastContactsList(contacts: any){
    this.contactsListSource.next(contacts)
  }

}
