import {Component, OnInit} from '@angular/core';
import * as data from '../../../assets/data.json';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getproducts().subscribe(products => {
      this.products = products;
      this.productsService.updateProducts(products);
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    /*this.cartService.addToCart(product)*/
  }

}
