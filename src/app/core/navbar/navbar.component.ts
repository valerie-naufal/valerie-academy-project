import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginPaneComponent } from '../../features/login-pane/login-pane.component';
import { CartPaneComponent } from '../../features/cart-pane/cart-pane.component';
import { SearchService } from '../services/search.service';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, LoginPaneComponent, CartPaneComponent, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private searchService: SearchService,
    private authService: AuthService
  ) {
    this.authService.isAuthenticated$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  isSearchOpen = false;
  isScrolled = false;
  searchTerm: string = '';
  isPaneOpen = false;
  isLoggedIn = false;
  activePane: any;

  openSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  closeSearch() {
    this.isSearchOpen = false;
  }

  onSearch() {
    this.searchService.updateQuery(this.searchTerm);
    console.log(this.searchTerm);
    this.router.navigate(['products', this.searchTerm]);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const targetSection = document.getElementById('collection');
    if (targetSection) {
      this.isScrolled = targetSection.getBoundingClientRect().top <= 0;
    }
  }

  togglePane(element: string) {
    this.isPaneOpen = !this.isPaneOpen;
    const pane = document.getElementById(element);
    this.activePane = element;
    console.log('toggling');
    if (pane) {
      pane.classList.toggle('open');
      console.log('added class');
    }
  }

  getCloseFunction(paneName: string) {
    return () => this.togglePane(paneName);
  }

  goToPage(patternArr: string[]) {
    this.router.navigate(patternArr);
  }

  navigateToLogin() {
    this.togglePane('loginPane');
    this.router.navigate(['/login']);
  }

  logout = () => {
    this.authService.logout();
    this.togglePane('loginPane');
  };
}
