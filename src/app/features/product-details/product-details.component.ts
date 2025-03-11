import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { CartService } from '../../core/services/cart.service';
import { IProduct } from '../../core/services/products.service';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  imports: [CommonModule, NavbarComponent, FooterComponent, ProductsComponent],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    window.scrollTo(0, 0);

    if (productId) {
      this.http
        .get(`https://fakestoreapi.com/products/${productId}`)
        .subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (error) => {
            console.error('Error fetching product:', error);
          },
        });
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}
