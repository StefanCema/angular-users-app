import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
 refreshSignal = 0;

  onUserAdded() {
    this.refreshSignal++; 
  }
}
