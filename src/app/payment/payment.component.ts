import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  order!: Order;
  orderId!: number;
  payment:Payment =new Payment();
  paymentvalue!:string;

  constructor(private cartService:CartService, private orderService: OrderService, private router: Router,private route: ActivatedRoute,private toastrService: ToastrService) { 
    /* orderSerice.getNewOrderForCurrentUser(this.orderId).subscribe({
      next: () => {
        //this.order = orderResponse;
      },
      error: (err) => {
        console.log(err);
        router.navigateByUrl('/checkout');
      }
    }) */


    
  }


   // Variables for the payment form
   cardNumber: string = '';
   expirationDate: string = '';
   cvv: string = '';
   
   // Static Payment Summary Information
   item: string = 'Sample Product';
   amount: string = '$99.99';
 
  
 
   ngOnInit(): void {
    // Retrieve the orderId from the route parameter
    this.route.paramMap.subscribe(params => {
      this.orderId = +params.get('orderId')!;  // Convert the orderId to a number
      console.log('Order ID from route:', this.orderId);

      // Now that orderId is available, make the API call to fetch the order details
      this.orderService.getNewOrderForCurrentUser(this.orderId).subscribe({
        next: (orderResponse) => {
          this.order = orderResponse;  // Assign the fetched order data to the `order` object
          console.log('Order details fetched:', this.order);
        },
        error: (err) => {
          console.error('Error fetching order:', err);
          // Navigate to the checkout page if there's an error (e.g., order not found)
          this.router.navigateByUrl('/checkout');
        }
      });
    });
  }
   // Handle form submission
   submitPayment(): void {
     // In a real-world scenario, here you would send the payment information to the server
     // for processing. Since this is a static page, we will just log the data.
     console.log('Card Number:', this.cardNumber);
     console.log('Expiration Date:', this.expirationDate);
     console.log('CVV:', this.cvv);
 
     //alert('Payment Submitted! This is just a static page, no payment is processed.');
    
     this.payment.paymentMethod="card";
   this.payment.amount=this.order.totalPrice;
   this.payment.status="Completed";

     this.orderService.pay(this.orderId, this.payment).subscribe({
next:(orderResponse:any)=>{
  const orderId = orderResponse.id;
  this.cartService.clearCart();
  this.router.navigateByUrl('/track/' + orderId);
  // Navigate to the PaymentComponent with the orderId
  //this.router.navigate(['/track', orderId]);
  this.toastrService.success('Payment Saved Successfully', orderResponse);
},
error:(err)=>{
  //console.error('Error fetching order:', err);
  // Navigate to the checkout page if there's an error (e.g., order not found)
  this.toastrService.error('Payment Failed', 'Error');
        console.log(err);
  this.router.navigateByUrl('/checkout');
}
   });
    }

   
}
