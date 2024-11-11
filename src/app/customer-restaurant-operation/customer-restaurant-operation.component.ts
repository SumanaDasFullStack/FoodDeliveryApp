import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-customer-restaurant-operation',
  templateUrl: './customer-restaurant-operation.component.html',
  styleUrls: ['./customer-restaurant-operation.component.css']
})
export class CustomerRestaurantOperationComponent implements OnInit{
  restaurants:Array<Restaurant>=[];
  constructor(public rs:RestaurantService){}  //DI for RestaurantService
  ngOnInit(): void {
    this.loadRestaurants();
  }
 loadRestaurants():void{
    this.rs.findAllRestaurants().subscribe({
      next:(result:any)=>{
        this.restaurants=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=> {
        console.log("restaurants loaded..")
      },
    })
 }
}
