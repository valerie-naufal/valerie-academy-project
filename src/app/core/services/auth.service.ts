import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated$!: BehaviorSubject<boolean>;

  constructor(
    private authApi: AuthApiService,
    private cookieService: CookieService,
    private permissionsService: NgxPermissionsService,
    private router: Router
  ) {
    this.isAuthenticated$ = new BehaviorSubject<boolean>(
      !!this.cookieService.get('accessToken')
    );
  }

  login(email: string, password: string, role: string = 'user'): void {
    this.cookieService.set('userEmail', email, { path: '/' });
    this.cookieService.set('accessToken', 'dummy-token', { path: '/' });
    this.cookieService.set('userRole', role, { path: '/' });

    this.permissionsService.loadPermissions([role]);

    this.isAuthenticated$.next(true);

    this.router.navigate(['/products']);
  }

  logout() {
    this.cookieService.deleteAll('/');
    this.isAuthenticated$.next(false);
    this.permissionsService.flushPermissions();

    this.router.navigate(['/login']);
  }

  getToken(): string {
    return this.cookieService.get('accessToken');
  }

  isLoggedIn(): Observable<boolean> {
    const loggedIn = !!this.cookieService.get('accessToken');
    console.log(`AuthService: User isLoggedIn = ${loggedIn}`);
    return of(loggedIn);
  }

  setPermissions(role: string) {
    this.permissionsService.loadPermissions([role]);
  }
}
