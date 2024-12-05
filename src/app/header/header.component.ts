import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: Login;
constructor(cartService: CartService,private loginService: LoginService){
  
  cartService.getCartObservable().subscribe((newCart) => {
    this.cartQuantity = newCart.totalCount;
  })
  loginService.loginObservable.subscribe((newUser)=>{
this.user=newUser;
  })
}
 

  logout() {
    this.loginService.logout();
  }
}
