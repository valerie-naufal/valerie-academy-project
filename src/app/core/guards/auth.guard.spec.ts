import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
  });

  const executeGuard = () => TestBed.runInInjectionContext(AuthGuard);

  it('should allow access when authenticated', (done) => {
    authServiceSpy.isAuthenticated.and.returnValue(of(true));

    const result = executeGuard();

    if (typeof result === 'boolean') {
      expect(result).toBeTrue();
      done();
    } else {
      result.subscribe((value) => {
        expect(value).toBeTrue();
        done();
      });
    }
  });

  it('should redirect when not authenticated', (done) => {
    authServiceSpy.isAuthenticated.and.returnValue(of(false));

    const result = executeGuard();

    if (typeof result === 'boolean') {
      expect(result).toBeFalse();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
      done();
    } else {
      result.subscribe((value) => {
        expect(value).toBeFalse();
        expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
        done();
      });
    }
  });
});
