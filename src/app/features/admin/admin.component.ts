import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { OrdersService } from '../../core/services/orders.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  user: any = null;
  orders: any[] = [];

  constructor(private ordersService: OrdersService) {
    this.ordersService.orders$.subscribe((orders) => {
      this.orders = [...orders];
    });
  }
}
