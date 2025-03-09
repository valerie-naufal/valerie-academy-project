import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isSearchOpen = false;
  isScrolled = false;
  openSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  closeSearch() {
    this.isSearchOpen = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const targetSection = document.getElementById('all-products');

    if (targetSection) {
      const sectionTop = targetSection.getBoundingClientRect().top;
      this.isScrolled = sectionTop <= 0; 
    }
  }
}
