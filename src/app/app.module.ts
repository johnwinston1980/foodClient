import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
//import { AngularFireAuth } from "@angular/fire/auth";

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProvidersComponent } from './providers/list-providers/list-providers.component';
import { environment } from 'src/environments/environment.prod';

import { ProvidersService } from '../app/providers/shared/providers.service';
import { DetailsProviderComponent } from './providers/details-provider/details-provider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCategoriesComponent } from './providers/list-categories/list-categories.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { ListContactsComponent } from './contacts/list-contacts/list-contacts.component'

import { ReactiveFormsModule } from '@angular/forms';
import { NewTransferComponent } from './transfers/new-transfer/new-transfer.component';
import { ListTransfersComponent } from './transfers/list-transfers/list-transfers.component'

import { FormsModule } from '@angular/forms';
import { DetailsTransferComponent } from './transfers/details-transfer/details-transfer.component';
import { NewDispatcherComponent } from './dispatcher/new-dispatcher/new-dispatcher.component';
import { NewProvinceComponent } from './dispatcher/new-province/new-province.component';
import { NewTownComponent } from './dispatcher/new-town/new-town.component';
import { ListProvincesComponent } from './dispatcher/list-provinces/list-provinces.component';
import { ListTownsComponent } from './dispatcher/list-towns/list-towns.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './users/verify-email/verify-email.component';
import { RegisterErrorComponent } from './errors/register-error/register-error.component';
import { MainSenderComponent } from './sender/main-sender/main-sender.component';
import { NewProviderComponent } from './providers/new-provider/new-provider.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';
import { MainDispatcherComponent } from './dispatcher/main-dispatcher/main-dispatcher.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProvidersComponent,
    DetailsProviderComponent,
    NavbarComponent,
    ListCategoriesComponent,
    NewContactComponent,
    ListContactsComponent,
    NewTransferComponent,
    ListTransfersComponent,
    DetailsTransferComponent,
    NewDispatcherComponent,
    NewProvinceComponent,
    NewTownComponent,
    ListProvincesComponent,
    ListTownsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    RegisterErrorComponent,
    MainSenderComponent,
    NewProviderComponent,
    MainAdminComponent,
    MainDispatcherComponent
  ],
  imports: [
    FormsModule,
    AngularFireAuthModule,
    MaterialModule,    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule    
  ],
  providers: [ProvidersService, AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
