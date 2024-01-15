import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { Login } from '../../interfaces/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemLingth:number=0;
  userIsLogged :any|null=null
  constructor(private _cs:CartService , private auth:AuthService ,private router:Router){}

  ngOnInit() {
    this._cs.getCartObservable().subscribe(res=>{
      this.cartItemLingth=res.totalCount
    })
    this.auth.getUserLoggedSub().subscribe(res=>{
      console.log(this.userIsLogged)
      this.userIsLogged=res
      console.log(this.userIsLogged)
    })
  }
  logout() {
    let model ={} as Login
    this.auth.loginUser(model).subscribe(res=>{
      console.log(res)
      this.userIsLogged=null;
      this.router.navigate(['/login'])
      this._cs.clearCart()
    })
  }
}
