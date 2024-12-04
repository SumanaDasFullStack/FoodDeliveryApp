import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER_URL, ORDER_PAY_URL } from './constants/urls';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }
  create(order: Order) {
    console.log(order);
    return this.httpClient.post<Order>(ORDER_CREATE_URL, order);
  }

  getNewOrderForCurrentUser(orderid:number): Observable<Order> {
    return this.httpClient.get<Order>(ORDER_NEW_FOR_CURRENT_USER_URL+orderid);
  }

  pay(order: Order): Observable<string> {
    return this.httpClient.post<string>(ORDER_PAY_URL, order);
  }

}
