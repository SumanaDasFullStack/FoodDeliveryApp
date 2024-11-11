import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent implements OnInit{

  menu!:Menu;
  foodItemId!: number;
  constructor(private menuService:MenuService, private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
   this.loadMenuDetails();
  }
  
 

  loadMenuDetails():void{
    const id = this.activatedRoute.snapshot.paramMap.get('id'); // Get the 'id' parameter

    // Check if id is valid (not null and convert to number)
    this.foodItemId = id ? +id : 0;  // Default to 0 if id is null or invalid
    console.log(this.foodItemId);
    this.menuService.findMenuDetails(this.foodItemId).subscribe({
      next:(result:any)=> {
        this.menu=result;
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        console.log("Menu Details Loaded");
      },
    })
  }

}
