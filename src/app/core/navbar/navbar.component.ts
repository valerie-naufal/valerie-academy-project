import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}
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
    const targetSection = document.getElementById('collection');

    if (targetSection) {
      const sectionTop = targetSection.getBoundingClientRect().top;
      this.isScrolled = sectionTop <= 0;
    }
  }

  goToPage(patternArr: string[]) {
    this.router.navigate(patternArr);
  }
}
