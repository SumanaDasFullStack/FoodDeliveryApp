import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

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

    let { emailid, typeofuser } = userService.currentUser;
    this.checkoutForm = new FormGroup({
      name: new FormControl(emailid, [Validators.required]),
      address: new FormControl("", [Validators.required])
    })
  }

  createOrder() {

    this.order.name = this.checkoutForm.controls['name'].value;
    this.order.address = this.checkoutForm.controls['address'].value;
   
    if(this.checkoutForm.invalid) {
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    if(!this.order.address) {
      this.toastrService.warning('Please select your address from the map', 'Invalid Address');
      return;
    }

   

    this.orderService.create(this.order).subscribe({
      next: (orderResponse:any) => {
        console.log(orderResponse);
       // Get the order ID from the response
       const orderId = orderResponse.id;

       // Navigate to the PaymentComponent with the orderId
       this.router.navigate(['/payment', orderId]);
       // this.router.navigateByUrl('/payment');
      },
      error: (errorResponse: { error: string | undefined; }) => {
        this.toastrService.error(errorResponse.error, 'Order Creation Failed');
      }
    })
  }

}
