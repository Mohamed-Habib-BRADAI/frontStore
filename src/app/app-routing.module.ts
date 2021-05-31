import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductItemDetailComponent} from './components/product-item-detail/product-item-detail.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
