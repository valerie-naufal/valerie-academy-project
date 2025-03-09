import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-shop-all',
  imports: [NavbarComponent, FooterComponent, ProductsComponent],
  templateUrl: './shop-all.component.html',
  styleUrl: './shop-all.component.scss'
})
export class ShopAllComponent {

}
