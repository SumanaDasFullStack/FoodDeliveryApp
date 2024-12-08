import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { GET_ALL_USERS, GET_ALL_USERS_SEARCH, UPDATE_USER_URL, USER_BLOCK_URL, USER_BY_ID_URL, USER_CHANGE_PASSWORD_URL, USER_LOGIN_URL, USER_REGISTER_URL, USER_UPDATE_PROFILE_URL } from './constants/urls';
import { Login } from './login';
import { ToastrService } from 'ngx-toastr';
import { IUserUpdateProfile } from './partials/IUserUpdateProfile';
import { Router } from '@angular/router';

const USER_KEY = 'User'; //for local storage

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<Login>(this.getUserFromLocalStorage());
  public  loginObservable: Observable<Login>;
  constructor(public httpClient:HttpClient,private toastrService: ToastrService, private router:Router) { 
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
            `Welcome to FoodDeliveryApp ${user.name}!`,
            'Login Successful  '
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

  //may require changes
  // Method to change user password
  changePassword(currentPassword: string, newPassword: string) {

    // Construct the request body
    const requestBody = {
      currentPassword: currentPassword,
      newPassword: newPassword,
    };

    return this.httpClient.put(USER_CHANGE_PASSWORD_URL, requestBody).pipe(
      tap({
        next: () => {
          // Display success message if password change is successful
          this.toastrService.success(
            `Password Changed Successfully`,
            'Password Changed'
          )
        },
        error: (errorResponse) => {
          // Display error message if password change fails
          this.toastrService.error(errorResponse.error, 'Password Change Failed')
        }
      })
    );
  }


  // Method to handle user logout
  logout() {
     this.loggedIn.next(new Login());
     localStorage.removeItem(USER_KEY);
      //window.location.reload();
      // Navigate to the login page (instead of refreshing the page)
    this.router.navigate(['/login']);
  }


  // Getter for the current user
  public get currentUser(): Login {
    return this.loggedIn.value;
  }

// Method to set user data to local storage
private setUserToLocalStorage(user: Login) {
  if(user.typeofuser==="admin")
  {
user.isAdmin=true;
  }
  else{
user.isAdmin=false;
  }
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

   //may require changes
  // Method to update user profile
  updateProfile(emailid:string,userUpdateProfile: IUserUpdateProfile): Observable<Login> {
    return this.httpClient.put<Login>(USER_UPDATE_PROFILE_URL+emailid, userUpdateProfile).pipe(
      tap({
        next: (user) => {
          // Update the current user in memory and store it in local storage
          this.setUserToLocalStorage(user);
          this.loggedIn.next(user);
          this.toastrService.success(
            `Profile Updated Successfully`,
            'Profile Updated'
          )
        },
        error: (errorResponse) => {
          // Display error message if update fails
          this.toastrService.error(errorResponse.error, 'Profile Update Failed')
        }
      })
    )
  }


// Method to get all users
getAllSearch(searchTerm: string): Observable<Login[]> {
  console.log(GET_ALL_USERS_SEARCH + searchTerm);
  return this.httpClient.get<Login[]>(GET_ALL_USERS_SEARCH + searchTerm,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } );
}
// Method to get all users
getAll(): Observable<Login[]> {
  return this.httpClient.get<Login[]>(GET_ALL_USERS,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } );
}

// Method to toggle user block status
toggleBlock(userId: string): Observable<boolean> {
  return this.httpClient.put<boolean>(USER_BLOCK_URL + userId, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
}

getById(userId: string): Observable<Login> {
  return this.httpClient.get<Login>(USER_BY_ID_URL + userId,{
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
}

updateUser(userid: string, userData: any) {
  return this.httpClient.put(UPDATE_USER_URL + userid, userData);
}


}
