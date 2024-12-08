import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { Observable } from 'rxjs';
import { ADD_MENU, FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_URL, MENU_BY_SEARCH_URL, MENU_DETAILS_URL, MENU_URL_ALL, UPDATE_FOODS_URL } from './constants/urls';
import { IMenuUpdate } from './partials/IMenuUpdate';

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

  //for admin purpose
  getAllFoodsBySearchTerm(searchTerm: string): Observable<Menu[]> {
    return this.http.get<Menu[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(FOODS_URL);
  }
  deleteById(foodId: number):Observable<any> {
    return this.http.delete(FOODS_BY_ID_URL + foodId);
  }

  update(menuId:string, food: IMenuUpdate ):Observable<Menu> {
    return this.http.put<Menu>(UPDATE_FOODS_URL +menuId, food,{
      headers:new HttpHeaders({
         'Content-Type': 'application/json'
      })
    });
  }

  add(food: IMenuUpdate): Observable<Menu> {
    return this.http.post<Menu>(FOODS_URL, food,{
      headers:new HttpHeaders({
         'Content-Type': 'application/json'
      })
    });
  }

}
