import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { RouterModule } from '@angular/router';
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RouterModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'valerie-academy-project';
}
