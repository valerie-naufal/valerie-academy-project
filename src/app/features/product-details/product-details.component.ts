import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { FooterComponent } from '../../core/footer/footer.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  imports: [CommonModule, NavbarComponent, FooterComponent],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    console.log(
      `ProductDetailsComponent: Loading product with ID = ${productId}`
    );

    if (productId) {
      this.http
        .get(`https://fakestoreapi.com/products/${productId}`)
        .subscribe({
          next: (data) => {
            this.product = data;
            console.log('Product loaded:', this.product);
          },
          error: (error) => {
            console.error('Error fetching product:', error);
          },
        });
    }
  }
}
