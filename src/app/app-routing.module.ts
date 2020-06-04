import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListProvidersComponent } from '../app/providers/list-providers/list-providers.component';
import { DetailsProviderComponent } from '../app/providers/details-provider/details-provider.component';
import { ListCategoriesComponent } from '../app/providers/list-categories/list-categories.component'

import { NewContactComponent } from '../app/contacts/new-contact/new-contact.component'
import { ListContactsComponent } from '../app/contacts/list-contacts/list-contacts.component'

import { NewTransferComponent } from '../app/transfers/new-transfer/new-transfer.component'
import { ListTransfersComponent } from '../app/transfers/list-transfers/list-transfers.component'

import { DetailsTransferComponent } from '../app/transfers/details-transfer/details-transfer.component'
import { NewProvinceComponent } from '../app/dispatcher/new-province/new-province.component'
import { NewTownComponent } from '../app/dispatcher/new-town/new-town.component'
import { NewDispatcherComponent } from '../app/dispatcher/new-dispatcher/new-dispatcher.component'

import { LoginComponent } from '../app/users/login/login.component';
import { RegisterComponent } from '../app/users/register/register.component';
import { ForgotPasswordComponent } from '../app/users/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../app/users/verify-email/verify-email.component';
 
import { AccessGuard } from '../app/shared/access.guard'

import { MainSenderComponent } from '../app/sender/main-sender/main-sender.component'

import { RegisterErrorComponent } from '../app/errors/register-error/register-error.component'
import { MainAdminComponent } from '../app/admin/main-admin/main-admin.component'

import { NewProviderComponent } from '../app/providers/new-provider/new-provider.component'



const routes: Routes = [
  
  { path: 'main-sender', component: MainSenderComponent },
  { path: 'main-admin', component: MainAdminComponent },
  { path: 'main-provider', component: DetailsProviderComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  
  { path: 'list-providers', component: ListProvidersComponent },
  { path: 'list-categories', component: ListCategoriesComponent },  
  { path: 'list-contacts', component: ListContactsComponent, canActivate: [AccessGuard]},  
  { path: 'list-transfers', component: ListTransfersComponent },

  { path: 'details-transfer', component: DetailsTransferComponent },
  
  { path: 'new-transfer', component: NewTransferComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: 'new-province', component: NewProvinceComponent },
  { path: 'new-town', component: NewTownComponent },
  { path: 'new-dispatcher', component: NewDispatcherComponent },
  { path: 'new-provider', component: NewProviderComponent },

  { path: 'error-register', component: RegisterErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
