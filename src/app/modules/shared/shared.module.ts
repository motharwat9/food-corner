import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { StarRatingComponent } from './components/star-rating/star-rating.component'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './components/tag/tag.component';


@NgModule({
  declarations: [
    HeaderComponent,
    StarRatingComponent,
    SearchComponent,
    TagComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
    
    
  ],
  exports:[
    HeaderComponent,
    HttpClientModule,
    StarRatingComponent,
    SearchComponent,
    FormsModule,
    TagComponent,
    
  ]
})
export class SharedModule { }
