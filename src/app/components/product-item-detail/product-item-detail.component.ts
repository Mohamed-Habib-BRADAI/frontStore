import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {
  private product: Product;
  quantity = [];
  amount = '1';

  constructor(private route: ActivatedRoute, private productsService: ProductsService,
              private cartService: CartService, private location: Location) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.product = this.productsService.getProduct(id);
    for (let i = 1; i <= 10; i++) {
      this.quantity.push(i);
    }
  }

  addToCard(product: Product) {
    window.alert('Added to cart!');
    const amount = parseInt(this.amount, 10);
    product.amount = product.amount ? product.amount + amount : amount;
    this.cartService.addToCart(product);
  }

  back() {
    this.location.back();
  }
}
