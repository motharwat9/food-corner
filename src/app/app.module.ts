import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { FoodModule } from './modules/food/food.module';
import { CartModule } from './modules/cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FoodModule,
    CartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
