import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductsComponent } from '../../shared/products/products.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  imports: [NavbarComponent, ProductsComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
