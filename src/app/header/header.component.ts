import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: Login;
constructor(private loginService: LoginService){
  loginService.loginObservable.subscribe((newUser)=>{
this.user=newUser;
  })
}
 

  logout() {
    this.loginService.logout();
  }
}
