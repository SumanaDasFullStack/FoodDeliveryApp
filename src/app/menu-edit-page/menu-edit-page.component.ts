import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from '../upload.service';
import { IMenuUpdate } from '../partials/IMenuUpdate';

@Component({
  selector: 'app-menu-edit-page',
  templateUrl: './menu-edit-page.component.html',
  styleUrls: ['./menu-edit-page.component.css']
})
export class MenuEditPageComponent implements OnInit {

  // Form group definition
  foodForm: FormGroup;
  isEditMode: boolean = false; // Set to true if in edit mode
  isSubmitted: boolean = false;
  menuid!:string;

  constructor(
    private fb: FormBuilder,
    private foodService: MenuService,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Form initialization with validation
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      isAvailable: [true], // Default to true
      restaurantId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // Check if in edit mode and retrieve data if needed
    this.activatedRoute.params.subscribe(params => {
      this.menuid=params['id'];
      console.log("menu id from previous "+this.menuid);
      if (params['id']) {
        this.isEditMode = true;
        this.foodService.findMenuDetails(params['id']).subscribe(food => {
          if (food) {
            // Populate form with the food data
            this.foodForm.patchValue({
              name: food.name,
              category: food.category,
              description: food.description,
              price: food.price,
              image: food.image,
              isAvailable: food.isAvailable,
              restaurantId: food.restaurant.restaurantId
            });
          }
        });
      }
    });
  }

  // Submit the form data
  submit(foodData: any) {
    this.isSubmitted = true;

    // Validate the form
    if (this.foodForm.invalid) {
      this.toastrService.error('Please fill in all required fields!');
      return;
    }

    // Construct the food object
    const food = {
      ...foodData,
      createdAt: new Date().toISOString(),
      restaurant: {
        restaurantId: foodData.restaurantId
      }
    };

    // Send the data to the service (microservice)
    if (this.isEditMode) {
      this.foodService.update(this.menuid,food).subscribe(response => {
        this.toastrService.success(`Food "${food.name}" updated successfully!`);
        this.router.navigate(['/admin/foods']);
      });
    } else {
      this.foodService.add(food).subscribe(response => {
        this.toastrService.success(`Food "${food.name}" added successfully!`);
        this.router.navigate(['/admin/foods']);
      });
    }
  }
}