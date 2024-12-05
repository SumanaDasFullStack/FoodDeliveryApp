import { Component } from '@angular/core';
import { Order } from '../order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-track',
  templateUrl: './order-track.component.html',
  styleUrls: ['./order-track.component.css']
})
export class OrderTrackComponent {
  order!: Order

  constructor(activatedRoute: ActivatedRoute, orderService: OrderService) { 
    const params = activatedRoute.snapshot.params;
    if(!params['orderId']) return;

    orderService.trackOrderById(params['orderId']).subscribe({
      next: (order: Order) => {
        this.order = order;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
