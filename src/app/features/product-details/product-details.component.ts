import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { CartService } from '../../core/services/cart.service';
import {
  ProductsService,
  IProduct,
} from '../../core/services/products.service';
import { ReviewsService } from '../../core/services/reviews.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  imports: [CommonModule, NavbarComponent, FooterComponent],
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('img-borders') imageContainer!: ElementRef;
  product: any;
  category: any;
  scale = 1;
  transformOrigin = 'center center';
  products: IProduct[] = [];
  pageTitle: string;
  reviews: any[] = [];

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
    private cartService: CartService,
    private productsService: ProductsService,
    private router: Router,
    private reviewsService: ReviewsService
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
            this.category = this.product['category'];
          },
          error: (error) => {
            console.error('Error fetching product:', error);
          },
        });
      this.getReviews(productId);
    }

    // Filter data based on category value
    this.productsService.getProducts().subscribe((data) => {
      switch (this.category) {
        case "men's clothing":
          this.products = data.filter(
            (product) => product.category === "men's clothing"
          );
          this.pageTitle = "Men's Clothing";
          break;

        case "women's clothing":
          this.products = data.filter(
            (product) => product.category === "women's clothing"
          );
          this.pageTitle = "Women's Clothing";
          break;

        case 'jewelery':
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
    });
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
  goToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
  private getReviews(productId: string): void {
    this.reviews = this.reviewsService.getReviewsByProductId(productId);
  }
}
