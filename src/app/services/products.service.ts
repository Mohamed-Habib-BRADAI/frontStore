import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];

  constructor(private http: HttpClient) {
  }

  public getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }

  updateProducts(products: Product[]) {
    this.products = products;
  }

  getProduct(id: number) {
    return this.products.filter(item => item.id === id)[0];
  }
}
