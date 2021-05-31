import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {Order} from '../../models/order.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  currentOrder: Order;

  constructor(private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
    this.currentOrder = this.cartService.getCurrentOrder();
  }

  home() {
    this.cartService.resetCart();
    this.cartService.resetCurrentOrder();
    this.router.navigate(['/']);
  }

  getTotalAmout() {
    return this.cartService.getTotalAmount(this.currentOrder.products);
  }
}
