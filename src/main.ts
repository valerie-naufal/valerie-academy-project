import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes, RouterModule } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { importProvidersFrom } from '@angular/core';
import { AuthGuard } from './app/core/guards/auth.guard';
import { GuestGuard } from './app/core/guards/guest.guard';
import { LoginComponent } from './app/core/login/login.component';
import { MainPageComponent } from './app/core/main-page/main-page.component';
import { ProductDetailsComponent } from './app/features/product-details/product-details.component';
import { ShopAllComponent } from './app/features/shop-all/shop-all.component';
import { ProfileComponent } from './app/features/profile/profile.component';
import { CheckOutComponent } from './app/features/check-out/check-out.component';
import { RegisterComponent } from './app/core/register/register.component';

const routes: Routes = [
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
  { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
];
console.log('Registered Routes:', routes);

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(NgxPermissionsModule.forRoot(), RouterModule),
  ],
}).catch((err) => console.error(err));
