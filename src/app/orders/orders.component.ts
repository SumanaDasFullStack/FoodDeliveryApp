import { Component } from '@angular/core';
import { Order } from '../order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders!: Order[];
  allStatus?: string[];
  filter?: string;

  constructor(activatedRoute: ActivatedRoute, orderService: OrderService) {

    let ordersObservable: Observable<Order[]>;

    activatedRoute.params.subscribe((params) => {
      if (params['filter']) {
        this.filter = params['filter'];
        // ordersObservable = orderService.getAll(params['filter']);
        ordersObservable = orderService.getAllStatus();
      }
      else {
        this.filter = '';
       // ordersObservable = orderService.getAll('');
       ordersObservable = orderService.getAllStatus();
      }

      ordersObservable.subscribe((serverOrders) => {
        this.orders = serverOrders;
      })

    })

    // orderService.getAllStatus().subscribe((serverStatus) => {
    //   this.allStatus = serverStatus;
    // })
  }

}
