import { RegisterComponent } from './modules/auth/components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './modules/food/components/food-list/food-list.component';
import { FoodDetailsComponent } from './modules/food/components/food-details/food-details.component';
import { CartComponent } from './modules/cart/components/cart/cart.component';
import { LoginComponent } from './modules/auth/components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'foods',component:FoodListComponent},
  {path: 'search/:searchTerm', component:FoodListComponent},
  {path: 'tags/:tags', component:FoodListComponent},
  {path:'food/:id' ,component:FoodDetailsComponent},
  {path:'cart',component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
