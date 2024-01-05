import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from 'src/app/modules/shared/models/cart';
import { Food } from 'src/app/modules/shared/interfaces/food';
import { CartItem } from 'src/app/modules/shared/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!:Cart;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe(res=>{
      this.cart=res;
    });
  }

  removeItem(food: Food) {
    this.cartService.removeItem(food);
  }

  changeQuantityOfItem(food: CartItem, inputValue: string) {
    let value=Number(inputValue);

    if(value <= 0) {
      this.removeItem(food.food);
    } else {
      this.cartService.changeQuantity(food, value);
    }
  }

  clearCart(){
    this.cartService.clearCart();
  }
}
