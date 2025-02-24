import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.authService.isLoggedIn().pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/products']);
          return false;
        }
        return true;
      })
    );
  }
}
