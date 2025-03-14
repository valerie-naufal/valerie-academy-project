import { Component, OnInit } from '@angular/core';
import {
  ProductsService,
  IProduct,
} from '../../core/services/products.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../core/services/search.service';
import AOS from 'aos';

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
  pageTitle: string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
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
            this.pageTitle = "Men's Clothing";
            break;

          case 'womens':
            this.products = data.filter(
              (product) => product.category === "women's clothing"
            );
            this.pageTitle = "Women's Clothing";
            break;

          case 'jewelry':
            this.products = data.filter(
              (product) => product.category === 'jewelery'
            );
            this.pageTitle = 'Jewelry';
            break;

          default:
            this.products = data.filter(
              (product) =>
                product.category === 'jewelery' ||
                product.category === "men's clothing" ||
                product.category === "women's clothing"
            );
            this.pageTitle = 'Our Products';
        }
        this.filteredProducts = data;
      });
    });

    this.searchService.currentQuery.subscribe((query) => {
      this.filterProducts(query);
    });
    AOS.init({
      startEvent: 'DOMContentLoaded',
    });
  }

  filterProducts(query: string) {
    if (!query) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  goToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
