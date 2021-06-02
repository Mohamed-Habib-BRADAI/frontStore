import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {CartService} from '../../services/cart.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product;
  quatity = [];
  amount = '1';

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.quatity.push(i);
    }
  }

  addToCard(product: Product) {
    window.alert('Added to cart!');
    const amount = parseInt(this.amount, 10);
    product.amount = product.amount ? product.amount + amount : amount;
    this.cartService.addToCart(product);
  }

  productDetail() {
    this.router.navigate(['product/' + this.product.id]);
  }
}
