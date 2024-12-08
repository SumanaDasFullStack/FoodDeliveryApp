import { Component } from '@angular/core';
import { Order } from '../order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders!: Order[];
  allStatus?: string[];
  filter?: string;

  constructor(activatedRoute: ActivatedRoute, orderService: OrderService, private user:LoginService) {
    let { emailid, isAdmin } = user.currentUser;
    let ordersObservable: Observable<Order[]>;

    activatedRoute.params.subscribe((params) => {

      if (params['filter']) {
        this.filter = params['filter'];
        // ordersObservable = orderService.getAll(params['filter']);
        ordersObservable = orderService.getAllStatus(emailid,isAdmin);
      }
      else {
        this.filter = '';
       // ordersObservable = orderService.getAll('');
       ordersObservable = orderService.getAllStatus(emailid,isAdmin);
      }



      ordersObservable.subscribe((serverOrders) => {
        this.orders = serverOrders;
        console.log("Order list  :"+JSON.stringify(this.orders));
      })

    })

    // orderService.getAllStatus().subscribe((serverStatus) => {
    //   this.allStatus = serverStatus;
    // })
  }

}
