import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductsComponent } from '../../features/products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [NavbarComponent, ProductsComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  constructor(private router: Router) {}
  goToPage(patternArr: string[]) {
    this.router.navigate(patternArr);
  }
}
