import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductsComponent } from '../../features/products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import AOS from 'aos';
import { MapComponent } from '../../features/map/map.component';
import { ProductsCarouselComponent } from "../../features/products-carousel/products-carousel.component";

@Component({
  selector: 'app-main-page',
  imports: [NavbarComponent, ProductsComponent, FooterComponent, MapComponent, ProductsCarouselComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  constructor(private router: Router) {}
  goToPage(patternArr: string[]) {
    this.router.navigate(patternArr);
  }

  ngOnInit(): void {
   AOS.init({
     startEvent: 'DOMContentLoaded',
   });
  }
}
