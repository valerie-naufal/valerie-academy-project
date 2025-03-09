import { Component, OnInit } from '@angular/core';
import {
  ProductsService,
  IProduct,
} from '../../core/services/products.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  searchQuery = new BehaviorSubject<string>('');
  category: string | null = null;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // get category from URL as path parameter

    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      // Filter data based on category value
      this.productsService.getProducts().subscribe((data) => {
        switch (this.category) {
          case 'mens':
            this.products = data.filter(
              (product) => product.category === "men's clothing"
            );
            break;

          case 'womens':
            this.products = data.filter(
              (product) => product.category === "women's clothing"
            );
            break;

          case 'jewelry':
            this.products = data.filter(
              (product) => product.category === 'jewelery'
            );
            break;

          default:
            this.products = data.filter(
              (product) =>
                product.category === 'jewelery' ||
                product.category === "men's clothing" ||
                product.category === "women's clothing"
            );
        }
      });
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
  goToProduct(productId: number) {
    console.log(`Attempting to navigate to product ID: ${productId}`);
    this.router.navigate(['/product', productId]);
  }
}
