import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MenuComponent {
  constructor(private router: Router, private menuCtrl: MenuController) {}

  async logout() {
    // In a real application, you would:
    // 1. Clear authentication tokens (e.g., from localStorage, cookies)
    // 2. Call an authentication service to log out on the backend
    // 3. Navigate to the login page or home page
    console.log('User initiated logout.');
    await this.menuCtrl.close(); // Close the menu first
    this.router.navigateByUrl('/login', { replaceUrl: true }); // Assuming a login page. Replace '/login' with your actual login route.
  }
}