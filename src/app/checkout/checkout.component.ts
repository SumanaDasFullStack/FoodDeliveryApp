import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  order: Order = new Order();

  checkoutForm: FormGroup;
  
  constructor(cartService: CartService, userService: LoginService, private toastrService: ToastrService, private orderService: OrderService, private router: Router) { 
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;

    let { name, address } = userService.currentUser;
    this.checkoutForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      address: new FormControl(address, [Validators.required])
    })
  }

  createOrder() {
    if(this.checkoutForm.invalid) {
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    if(!this.order.addressLatLng) {
      this.toastrService.warning('Please select your address from the map', 'Invalid Address');
      return;
    }

    this.order.name = this.checkoutForm.controls.name.value;
    this.order.address = this.checkoutForm.controls.address.value;

    this.orderService.create(this.order).subscribe({
      next: () => {
        this.router.navigateByUrl('/payment');
      },
      error: (errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Order Creation Failed');
      }
    })
  }

}
