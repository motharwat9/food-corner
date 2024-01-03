import { ActivatedRoute, Router } from '@angular/router';
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
  tags:string[]=[]
  uniqueTags:string[]=[]
  constructor(private _fs:FoodService,private activatedRoute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.getAllFoods()

  }
  getAllFoods(){
    this._fs.getAllFoods().subscribe(res=>{
      this.foods=res
      for(let i in this.foods){
        for(let j in this.foods[i].tags){
          this.tags.push(this.foods[i].tags[j])
        }
      }
      this.uniqueTags=[... new Set(this.tags)]
      this.activatedRoute.params.subscribe(params=>{
        if(params['searchTerm']){
          this.foods=this.foods.filter(food=>food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
        }else if(params['tags']){
          if(params['tags'] === 'All'){
            this.router.navigate(['/foods'])
          }else {
            this.foods=res.filter(food=>food.tags.includes(params['tags']))
          }
        }
      })
    })
  }
}
