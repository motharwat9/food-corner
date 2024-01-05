import { Food } from 'src/app/modules/shared/interfaces/food';
import { Cart } from './../../shared/models/cart';
import { Injectable } from '@angular/core';
import { CartItem } from '../../shared/models/cartItem';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addToCart(food: Food) {
    const cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) return;
    
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeItem(food: Food) {
    this.cart.items = this.cart.items.filter(item => item.food.id !== food.id);
    this.setCartToLocalStorage();
  }

  changeQuantity(food: CartItem, quantity: number) {
    food.quantity = quantity;
    food.price = quantity * food.food.price;
    this.setCartToLocalStorage();
    console.log(food);
    console.log(this.cart);
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  get cartSub() {
    return this.cartSubject;
  }

  private setCartToLocalStorage() {
    this.cart.totalCount = this.cart.items.reduce((prevCount, currCount) => prevCount + currCount.quantity, 0);
    this.cart.totalPrice = this.cart.items.reduce((prevPrice, currPrice) => prevPrice + currPrice.price, 0);
    
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage() {
    try {
      const cartJSON = localStorage.getItem('cart');
      return cartJSON ? JSON.parse(cartJSON) : new Cart();
    } catch (error) {
      console.error('Error parsing cart data from local storage:', error);
      return new Cart();
    }
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
    localStorage.clear();
  }
}
