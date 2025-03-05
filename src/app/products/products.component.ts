import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from "../core/navbar/navbar.component";

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, NavbarComponent],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery = new BehaviorSubject<string>('');

  constructor(
    private productsService: ProductsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });

    //RxJs filtering
    this.searchQuery
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((query) =>
          this.products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          )
        )
      )
      .subscribe((filtered) => (this.filteredProducts = filtered));
  }

  filterProducts(event: any) {
    this.searchQuery.next(event.target.value);
  }

  logout() {
    this.authService.logout();
  }
}
