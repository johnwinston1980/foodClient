import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { 
  MatButtonModule,   
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,  
  MatCheckboxModule,
  MatGridListModule,
  MatGridTile,
  MatListModule,
  MatNavList,
  MatListItem,  
  MatFormFieldModule,
  MatIconModule,
  MatIcon,
  MatToolbarModule,  
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule } from '@angular/material'

  import {MatTabsModule} from '@angular/material/tabs'; 

@NgModule({
  imports: [        
    MatButtonModule,
    MatToolbarModule, 
    MatInputModule, 
    MatProgressSpinnerModule,
    MatCardModule,   
    MatCheckboxModule, 
    MatGridListModule,
    MatListModule,
    MatIconModule,   
    MatRadioModule, 
    MatDialogModule,    
    MatTabsModule,
    MatSelectModule,
    MatSidenavModule],
  exports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatProgressSpinnerModule,
    MatCardModule,   
    MatCheckboxModule, 
    MatGridListModule,
    MatListModule,
    MatIconModule,    
    MatRadioModule, 
    MatTabsModule, 
    MatSelectModule,  
    MatSidenavModule]  
})

export class MaterialModule { }