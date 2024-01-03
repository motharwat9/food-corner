import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './modules/food/components/food-list/food-list.component';
import { FoodDetailsComponent } from './modules/food/components/food-details/food-details.component';

const routes: Routes = [
  {path:'',redirectTo:'foods',pathMatch:'full'},
  {path:'foods',component:FoodListComponent},
  {path: 'search/:searchTerm', component:FoodListComponent},
  {path: 'tags/:tags', component:FoodListComponent},
  {path:'food/:Id' ,component:FoodDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
