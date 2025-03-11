import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Order {
  id: number;
  total: number;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();
  constructor() {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders);
      this.ordersSubject.next([...this.orders]); 
    }
  }

  completeOrder(totalAmount: number) {
    const newOrder: Order = {
      id: this.orders.length + 1,
      total: totalAmount,
      date: new Date().toLocaleString(),
    };
    this.orders.push(newOrder);
    this.ordersSubject.next([...this.orders]);
    localStorage.setItem('orders', JSON.stringify(this.orders)); 
    console.log('Order saved:', newOrder);
  }
}
