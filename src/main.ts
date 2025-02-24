import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions'; 
import { importProvidersFrom } from '@angular/core';
import { AuthGuard } from './app/guards/auth.guard';
import { GuestGuard } from './app/guards/guest.guard';
import { LoginComponent } from './app/login/login.component';
import { ProductsComponent } from './app/products/products.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(NgxPermissionsModule.forRoot()), 
  ],
}).catch((err) => console.error(err));
