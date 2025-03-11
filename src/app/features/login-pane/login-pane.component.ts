import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pane',
  standalone: true,
  templateUrl: './login-pane.component.html',
  styleUrls: ['./login-pane.component.scss'],
  imports: [CommonModule],
})
export class LoginPaneComponent {
  @Input() closePane!: () => void;
  @Input() isLoggedIn: boolean = false;
  @Input() loginAction!: () => void;
  @Input() logoutAction!: () => void;
  constructor(private router: Router) {}

  goToPage(patternArr: string[]) {
    this.router.navigate(patternArr);
  }
}
