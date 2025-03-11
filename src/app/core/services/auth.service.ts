import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$!: BehaviorSubject<boolean>;
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private cookieService: CookieService,
    private permissionsService: NgxPermissionsService,
    private router: Router
  ) {
    this.isAuthenticated$ = new BehaviorSubject<boolean>(
      !!this.cookieService.get('accessToken')
    );
  }

  signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string = 'user'
  ): void {
    this.cookieService.set('firstName', firstName, { path: '/' });
    this.cookieService.set('lastName', lastName, { path: '/' });
    this.cookieService.set('userEmail', email, { path: '/' });
    this.cookieService.set('accessToken', 'dummy-token', { path: '/' });
    this.cookieService.set('userRole', role, { path: '/' });

    this.permissionsService.loadPermissions([role]);

    this.isAuthenticated$.next(true);

    this.router.navigate(['/main']);
    const user: User = { firstName, lastName, username: email, email };
    this.userSubject.next(user);
  }

  login(email: string, password: string, role: string = 'user') {
    const firstName = this.cookieService.get('firstName') || 'Unknown';
    const lastName = this.cookieService.get('lastName') || 'User';

    this.cookieService.set('userEmail', email, { path: '/' });
    this.cookieService.set('accessToken', 'dummy-token', { path: '/' });
    this.cookieService.set('userRole', role, { path: '/' });

    this.permissionsService.loadPermissions([role]);
    this.isAuthenticated$.next(true);

    const user: User = { firstName, lastName, username: email, email };
    this.userSubject.next(user);

    this.router.navigate(['/main']);
  }

  logout() {
    this.cookieService.deleteAll('/');
    this.isAuthenticated$.next(false);
    this.permissionsService.flushPermissions();

    this.router.navigate(['/login']);
    this.userSubject.next(null);
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
