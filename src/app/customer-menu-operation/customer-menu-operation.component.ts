import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-customer-menu-operation',
  templateUrl: './customer-menu-operation.component.html',
  styleUrls: ['./customer-menu-operation.component.css']
})
export class CustomerMenuOperationComponent implements OnInit{
  menu:Array<Menu>=[];
  constructor(public ms:MenuService){}  //DI for Menu Service
  ngOnInit(): void {
    this.loadMenu();
  }
 loadMenu():void{
    this.ms.findAllMenu().subscribe({
      next:(result:any)=>{
        this.menu=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=> {
        console.log("menu items loaded..")
      },
    })
 }
}
