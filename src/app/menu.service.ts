import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { Observable } from 'rxjs';
import { ADD_MENU, MENU_BY_SEARCH_URL, MENU_DETAILS_URL, MENU_URL_ALL } from './constants/urls';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  constructor(public http:HttpClient) { }

  findAllMenu():Observable<Menu[]>{
    return this.http.get<Menu[]>(MENU_URL_ALL,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  addMenu(menuitem:any):Observable<string>{
    return this.http.post(ADD_MENU,menuitem,{responseType:'text'})
  }
  findMenuDetails(menuid:number):Observable<Menu>{
    return this.http.get<Menu>(MENU_DETAILS_URL+menuid,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  findMenuSearch(term:string):Observable<Menu[]>{
    return this.http.get<Menu[]>(MENU_BY_SEARCH_URL+term,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

}
