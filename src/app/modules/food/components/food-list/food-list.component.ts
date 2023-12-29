import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/modules/shared/model/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foods:Food[]=[];
  f:boolean=true
  constructor(private _fs:FoodService){}
  ngOnInit(): void {
    this.getAllFoods()
  }
  getAllFoods(){
    this._fs.getAllFoods().subscribe(res=>{
      this.foods=res
      console.log(this.foods)
    })
  }
    

}
