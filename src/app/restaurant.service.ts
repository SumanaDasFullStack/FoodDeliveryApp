import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
baseUrl:string="http://localhost:9090/restaurants";
  constructor(public http:HttpClient) { }

  findAllRestaurants():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.baseUrl+"/allRestaurants",{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  addRestaurant(restaurant:any):Observable<string>{
    return this.http.post(this.baseUrl+"/addRestaurant",restaurant,{responseType:'text'})
  }
}
