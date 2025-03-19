import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../services/products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: IProduct[] = [];
  private cartSubject = new BehaviorSubject<IProduct[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    this.loadCartFromLocalStorage();
  }

  addToCart(product: IProduct) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToLocalStorage();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartItems = this.cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToLocalStorage();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToLocalStorage();
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
    this.saveCartToLocalStorage();
  }

  getTotalAmount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  }

  // Load cart items from localStorage
  private loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      this.cartSubject.next([...this.cartItems]);
    }
  }

  // Save cart items to localStorage
  private saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems));
  }
}
