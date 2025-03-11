import { Component, Input, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { IProduct } from '../../core/services/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-pane',
  imports: [CommonModule],
  templateUrl: './cart-pane.component.html',
  styleUrl: './cart-pane.component.scss',
})
export class CartPaneComponent {
  @Input() closePane!: () => void;
  cartItems: IProduct[] = [];

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cart$.subscribe((items) => (this.cartItems = items));
  }

  updateQuantity(productId: number, event: Event) {
    const newQuantity = (event.target as HTMLInputElement).valueAsNumber;
    this.cartService.updateQuantity(productId, newQuantity);
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  goToPage(patternArr: string[]) {
    this.router.navigate(patternArr);
  }
}
