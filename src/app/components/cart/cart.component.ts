import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  fullName = '';
  adress = '';
  creditCard: number;
  items: Product[];

  constructor(private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(): void {
    this.cartService.createOrder(this.items, this.fullName, this.adress);
    this.router.navigate(['/confirmation']);
  }

  totalPrice() {
    return this.cartService.getTotalAmount(this.items);
  }

  deleteItem(item: Product) {
    if (item.amount === 0) {
      alert('Removed from the card ! ');
      this.items = this.cartService.deleteItem(item.id);
    }
  }
}
