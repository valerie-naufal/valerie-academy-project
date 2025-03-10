import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  selectedTab = 1; 

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
