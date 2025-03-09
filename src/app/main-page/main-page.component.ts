import { Component } from '@angular/core';
import { NavbarComponent } from "../core/navbar/navbar.component";
import { ProductsComponent } from "../products/products.component";
import { FooterComponent } from '../core/footer/footer.component';

@Component({
  selector: 'app-main-page',
  imports: [NavbarComponent, ProductsComponent,FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
