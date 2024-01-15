import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from './modules/cart/services/cart.service';
import { AuthService } from './modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges,OnInit {
  userLogin:any;

  constructor(private _cs:CartService , private auth:AuthService,private router:Router) {}
  ngOnInit(): void {
    this.LoadUserLogin()
    }

  ngOnChanges(): void {
    this._cs.getCartObservable().subscribe(res=>{
      console.log(res)
      this._cs.cartSub.next(res)
    })
  }
  LoadUserLogin() {
    this.auth.getUserLogin().subscribe(res=>{
      if(res.email){
        this.userLogin=res
        console.log(this.userLogin)
        this.auth.getUserLoggedSub().next(res)
        this.router.navigate(['/foods']);
      }else{
        this.router.navigate(['/']);
        this._cs.clearCart()
      }
    })
  }
}
