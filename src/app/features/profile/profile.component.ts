import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../core/footer/footer.component';
import { AuthService } from '../../core/services/auth.service';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})

export class ProfileComponent {
  selectedTab = 1;
  user: any = null;
  orders: any[] = [];

  constructor(
    private authService: AuthService,
    private ordersService: OrdersService
  ) {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });

    this.ordersService.orders$.subscribe((orders) => {
      this.orders = [...orders];
    });
  }


  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
