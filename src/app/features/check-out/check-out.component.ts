import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { CartService } from '../../core/services/cart.service';
import { IProduct } from '../../core/services/products.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-check-out',
  imports: [NavbarComponent, FooterComponent, ButtonComponent, CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss',
})
export class CheckOutComponent {
  cartItems: IProduct[] = [];
  totalAmount: number = 0;
  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.cartService.cart$.subscribe((items) => (this.cartItems = items));
  }

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.totalAmount = this.cartService.getTotalAmount();
    });
    window.scrollTo(0, 0);
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  completeOrder() {
    if (this.totalAmount > 0) {
      this.ordersService.completeOrder(this.totalAmount);
      this.cartService.clearCart();
      this.router.navigate(['/main']); 
    }
  }
}
