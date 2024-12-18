import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menu:Menu[]=[];
  constructor(private ms:MenuService, private activatedRoute:ActivatedRoute,private router:Router){
    let foodsObservable: Observable<Menu[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        foodsObservable=this.ms.findMenuSearch(params['searchTerm']);
      }
      else{
        foodsObservable = this.ms.findAllMenu();
      }

      foodsObservable.subscribe((serverFoods) => {
        this.menu = serverFoods;
      })

    })
  }  //DI for Menu Service
//   ngOnInit(): void {
//     this.loadMenu();
//   }
//  loadMenu():void{
//     this.ms.findAllMenu().subscribe({
//       next:(result:any)=>{
//         this.menu=result;
//       },
//       error:(error:any)=>{
//         console.log(error)
//       },
//       complete:()=> {
//         console.log("menu items loaded..")
//       },
//     })
//  }

 onFoodItemClick(id: number) {
  // Navigate to the details page and pass the food item ID
  this.router.navigate(['/menudetails', id]);
}
}
