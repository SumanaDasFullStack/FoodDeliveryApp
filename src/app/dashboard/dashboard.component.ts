import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  allItems = [
    {
      title: 'Orders',
      imageUrl: 'assets/icons/orders.svg',
      url: '/orders',
      bgColor: '#ec407a',
      color: 'white',
    },
    // {
    //   title: 'Profile',
    //   imageUrl: 'assets/icons/profile.svg',
    //   url: '/profile',
    //   bgColor: '#1565c0',
    //   color: 'white',
    // },
    {
      title: 'Users',
      imageUrl: 'assets/icons/users.svg',
      url: '/admin/users',
      forAdmin: true,
      bgColor: '#00bfa5',
      color: 'white',
    },
    {
      title: 'Foods',
      imageUrl: 'assets/icons/foods.svg',
      url: '/admin/foods',
      forAdmin: true,
      bgColor: '#e040fb',
      color: 'white',
    },
  ];

  isAdmin!: boolean;

  constructor(userService: LoginService) {

    this.isAdmin = userService.currentUser.isAdmin

  }

}

