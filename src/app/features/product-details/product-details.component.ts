import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('img-borders') imageContainer!: ElementRef;
  product: any;
  scale = 1;
  transformOrigin = 'center center';
 
  /* @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const container = this.imageContainer.nativeElement;
    const rect = container.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const xPercent = (offsetX / rect.width) * 100;
    const yPercent = (offsetY / rect.height) * 100;

    // Dynamically update transform-origin based on mouse position
    this.transformOrigin = `${xPercent}% ${yPercent}%`;

    // Apply zoom effect
    this.scale = 1.5; // Adjust scale as needed
  } 

  @HostListener('mouseenter')
  onMouseEnter(): void {
    // Only apply zoom effect when the mouse enters the image container
    this.scale = 1.5;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    // Reset zoom and transform-origin when mouse leaves the image container
    this.scale = 1;
    this.transformOrigin = 'center center';
  } */

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
