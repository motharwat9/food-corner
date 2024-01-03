import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from 'src/app/modules/shared/model/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  foodId:number=0;
  food?:Food
  constructor(private _fs:FoodService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.foodId= Number(params['Id'])
    })
  }
  ngOnInit(): void {
    this.getFoodById()
  }
  getFoodById(){
    this._fs.getFoodById(this.foodId).subscribe(res=>{
      this.food=res
      console.log(this.food)
    })
  }
}