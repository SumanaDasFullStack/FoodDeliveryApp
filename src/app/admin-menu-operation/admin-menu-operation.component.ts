import { Component } from '@angular/core';
import { Menu } from '../menu';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-admin-menu-operation',
  templateUrl: './admin-menu-operation.component.html',
  styleUrls: ['./admin-menu-operation.component.css']
})
export class AdminMenuOperationComponent {
  foods: Menu[] = [];

  searchTerm = '';

  constructor(activatedRoute: ActivatedRoute, private foodService: MenuService, private toastrService: ToastrService) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
        this.foodService.findMenuSearch(params['searchTerm']).subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
      } else {
        this.foodService.findAllMenu().subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
      }
    })
  }


  deleteFood(food: Menu) {
    const confirmed = window.confirm(`Delete Food ${food.name}?`);
    if (!confirmed) return;

    this.foodService.deleteById(food.menuId).subscribe({
      next: () => {
        this.toastrService.success(`${food.name} Has Been Deleted!`);
        this.foods = this.foods.filter(f => f.menuId !== food.menuId);
      },
      error: (err: any) => {
        console.error('Error deleting food:', err);
      }
    });
  }
}
