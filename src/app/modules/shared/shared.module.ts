import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { StarRatingComponent } from './components/star-rating/star-rating.component'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagComponent } from './components/tag/tag.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputContainerComponent } from './components/input-container/input-container.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ControlArrayComponent } from './components/control-array/control-array.component';
import { ToastrModule } from 'ngx-toastr';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { TitleComponent } from './components/title/title.component';


const material=[MatIconModule,MatSelectModule,MatInputModule,MatFormFieldModule]
@NgModule({
  declarations: [
    HeaderComponent,
    StarRatingComponent,
    SearchComponent,
    TagComponent,
    NotFoundComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    ControlArrayComponent,
    DefaultButtonComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates:true,
      timeOut:2000,
      easing:'ease-in',
      easeTime:1000
    }),
    material
    
    
  ],
  exports:[
    HeaderComponent,
    HttpClientModule,
    StarRatingComponent,
    SearchComponent,
    FormsModule,
    TagComponent,
    NotFoundComponent,
    ReactiveFormsModule,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    ControlArrayComponent,
    DefaultButtonComponent,
    TitleComponent,
    material,

  ]
})
export class SharedModule { }
