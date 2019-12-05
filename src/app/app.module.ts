import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProvidersComponent } from './providers/list-providers/list-providers.component';
import { environment } from 'src/environments/environment.prod';

import { ProvidersService } from '../app/providers/shared/providers.service'

@NgModule({
  declarations: [
    AppComponent,
    ListProvidersComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ ProvidersService, AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
