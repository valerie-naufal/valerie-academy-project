import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login-pane',
  standalone: true,
  templateUrl: './login-pane.component.html',
  styleUrls: ['./login-pane.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginPaneComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  @Input() closePane!: () => void;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password);
    }
  }
}
