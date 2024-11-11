import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL } from './constants/urls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpClient:HttpClient) { }  //DI for Client

  signIn(login:any):Observable<String>{
    return this.httpClient.post(USER_LOGIN_URL,login,{responseType:'text'});
  }

  signUp(login:any):Observable<String>{
    return this.httpClient.post(USER_REGISTER_URL,login,{responseType:'text'});
  }

  // Method to handle user logout
  logout() {
    // this.userSubject.next(new User());
    // localStorage.removeItem(USER_KEY);
    window.location.reload();
  }
}
