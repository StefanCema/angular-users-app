import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    const { username, password } = this.form.value;
    const success = this.auth.login(username || '', password || '');
    if (success) {
      this.router.navigate(['/users']);
    } else {
      alert('Neispravni kredencijali');
    }
  }
}
