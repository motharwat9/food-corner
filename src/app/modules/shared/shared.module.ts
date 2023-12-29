import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { StarRatingComponent } from './components/star-rating/star-rating.component'
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
    
    
  ],
  exports:[
    HeaderComponent,
    HttpClientModule,
    StarRatingComponent,

    
  ]
})
export class SharedModule { }
