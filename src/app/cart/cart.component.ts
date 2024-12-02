import { Component } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!: Cart;

  constructor(private cartService: CartService)
  {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  removeFromCart(cartItem: Cartitem) {
    this.cartService.removeFromCart(cartItem.food.menuId);
  }

  changeQuantity(cartItem: Cartitem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    if(quantity > 0) {
      this.cartService.changeQuantity(cartItem.food.menuId, quantity);
    }
  }

}
