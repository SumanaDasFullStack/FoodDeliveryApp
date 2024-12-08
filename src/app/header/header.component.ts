import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: Login;
constructor(cartService: CartService,private loginService: LoginService,private router: Router){
  
  cartService.getCartObservable().subscribe((newCart) => {
    this.cartQuantity = newCart.totalCount;
  })
  loginService.loginObservable.subscribe((newUser)=>{
this.user=newUser;
  })
}
 

  logout() {
    this.loginService.logout();
   // this.router.navigate(['/login']);  // Redirect to login page
  }
}
