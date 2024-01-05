import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from './modules/cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  constructor(private _cs:CartService){}
  ngOnChanges(): void {
    this._cs.getCartObservable().subscribe(res=>{
      console.log(res)
      this._cs.cartSub.next(res)
    })
  }
  title = 'food-corner';
}
