import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemLingth:number=0;

  constructor(private _cs:CartService){}

  ngOnInit() {
    this._cs.getCartObservable().subscribe(res=>{
      this.cartItemLingth=res.totalCount
    })
  }
}
