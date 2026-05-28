import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // Data binding models
  loginData = { email: '', password: '' };

  constructor(private router: Router) {}

  handleLogin() {
    console.log('Logging in with:', this.loginData);
    // Navigate to the features entry point
    this.router.navigateByUrl('/features');
  }
}