import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  refreshSignal = 0;

  constructor(public auth: AuthService) {}

  onUserAdded() {
    this.refreshSignal++;
  }

  logout() {
    this.auth.logout();
  }
}
