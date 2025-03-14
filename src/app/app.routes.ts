import { Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { LoginComponent } from './core/login/login.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { ShopAllComponent } from './features/shop-all/shop-all.component';
import { ProfileComponent } from './features/profile/profile.component';
import { CheckOutComponent } from './features/check-out/check-out.component';
import { RegisterComponent } from './core/register/register.component';
import { AdminComponent } from './features/admin/admin.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'products', component: ShopAllComponent, canActivate: [AuthGuard] },
  {
    path: 'products/:category',
    component: ShopAllComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
];

