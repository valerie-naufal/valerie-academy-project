import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginPaneComponent } from '../../features/login-pane/login-pane.component';
import { CartPaneComponent } from '../../features/cart-pane/cart-pane.component';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, LoginPaneComponent, CartPaneComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router, private searchService: SearchService) {}
  isSearchOpen = false;
  isScrolled = false;
  searchTerm: string = '';

  openSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  closeSearch() {
    this.isSearchOpen = false;
  }

  onSearch() {
    this.searchService.updateQuery(this.searchTerm);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const targetSection = document.getElementById('collection');
    if (targetSection) {
      this.isScrolled = targetSection.getBoundingClientRect().top <= 0;
    }
  }
  togglePane(element: string) {
    console.log(element);
    const pane = document.getElementById(element);
    if (pane) {
      pane.classList.toggle('open');
      console.log('Toggling Pane');
    }
  }

  getCloseFunction(paneName: string) {
    return () => this.togglePane(paneName);
  }

  goToPage(patternArr: string[]) {
    this.router.navigate(patternArr);
  }
}
