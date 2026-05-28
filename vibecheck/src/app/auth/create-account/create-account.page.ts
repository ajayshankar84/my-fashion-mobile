import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage {
  currentStep = 1;
  registerData = { name: '', email: '', mobile: '', style: 'STREETWEAR', password: '' };

  constructor(private router: Router) {}

  nextStep(step: number) {
    // Basic field validation could be added here
    this.currentStep = step;
  }

  selectStyle(style: string) {
    this.registerData.style = style;
  }

  handleJoin() {
    console.log('Creating account with:', this.registerData);
    // After successful registration, navigate to features
    this.router.navigateByUrl('/features');
  }
}