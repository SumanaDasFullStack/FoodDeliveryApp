import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL } from './constants/urls';
import { Login } from './login';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'User'; //for local storage

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<Login>(this.getUserFromLocalStorage());
  public  loginObservable: Observable<Login>;
  constructor(public httpClient:HttpClient,private toastrService: ToastrService) { 
    this.loginObservable =this.loggedIn.asObservable();
  }  //DI for Client

  //method to handle user login
  /* signIn(login:any):Observable<String>{
    return this.httpClient.post(USER_LOGIN_URL,login,{responseType:'text'});
  } */

    signIn(login:any):Observable<Login>{
      return this.httpClient.post(USER_LOGIN_URL,login).pipe(
        tap({
          next: (user:any) =>{
             // Save the logged in user to local storage and trigger a notification about it
          this.setUserToLocalStorage(user);
          this.loggedIn.next(user);
          this.toastrService.success(
            `Welcome to FoodDeliveryApp ${user.emailid}!`,
            'Login Successful'
          )
          },
          error: (errorResponse) => {
            // Display error message if login fails
            this.toastrService.error(errorResponse.error, 'Login Failed')
          }
        })
      )
    }

  signUp(login:any):Observable<String>{
    return this.httpClient.post(USER_REGISTER_URL,login,{responseType:'text'});
  }

  // Method to handle user logout
  logout() {
     this.loggedIn.next(new Login());
     localStorage.removeItem(USER_KEY);
    window.location.reload();
  }


  // Getter for the current user
  public get currentUser(): Login {
    return this.loggedIn.value;
  }

// Method to set user data to local storage
private setUserToLocalStorage(user: Login) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

   // Method to get user data from local storage
   private getUserFromLocalStorage(): Login {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) {
      return JSON.parse(userJson) as Login;
    }
    return new Login();
  }
}
