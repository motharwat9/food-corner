import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/modules/shared/interfaces/food';
import { FoodService } from '../../services/food.service';
import { CartService } from 'src/app/modules/cart/services/cart.service';



@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
})
export class FoodDetailsComponent implements OnInit {
  foodId: number = 0;
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.foodId = Number(params['id']);
    });
  }

  ngOnInit(): void {
    this.loadFoodById();
  }

  loadFoodById() {
    this.foodService.getFoodById(this.foodId).subscribe((res) => {
      this.food = res;
    });
  }

  addToCart() {
    if(this.food) {
      this.cartService.addToCart(this.food);
    }
  }
}
