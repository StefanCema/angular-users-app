import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }

  get username(): string {
    return this.auth.getUsername(); // napravi ovu metodu u auth.service
  }

  get initials(): string {
    const names = this.username.split(' ');
    return names
      .map((n) => n[0].toUpperCase())
      .join('')
      .slice(0, 2);
  }
}
