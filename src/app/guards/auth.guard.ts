import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      take(1),
      switchMap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
          return of(false);
        }
        return of(true);
      })
    );
  }
}
