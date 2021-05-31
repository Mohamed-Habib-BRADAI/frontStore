import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";
import {Order} from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  private currentOrder: Order;

  constructor() {
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  resetCart() {
    this.items = [];
    return this.items;
  }

  resetCurrentOrder() {
    this.currentOrder = null;
  }

  getItems() {
    return this.items;
  }

  deleteItem(id: number): Product[] {
    this.items = this.items.filter(item => item.id !== id);
    return this.items;
  }

  findItem(id: number): Product {
    return this.items.filter(item => item.id === id)[0];
  }

  getCurrentOrder() {
    return this.currentOrder;
  }


  createOrder(items: Product[], fullName: string, adress: string) {
    this.currentOrder = {
      adress, userName: fullName, products: items
    };
  }

  getTotalAmount(items: Product[]) {
    return items.reduce((price, product2) => price + product2.price * product2.amount, 0);
  }
}
