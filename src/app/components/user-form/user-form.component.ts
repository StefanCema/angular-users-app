import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  @Output() userAdded = new EventEmitter<void>();

  form: FormGroup;
  userId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    if (this.userId) {
      this.userService.getUser(this.userId).subscribe((user) => {
        this.form.patchValue(user);
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const userData = this.form.value;

    if (this.userId) {
      // Edit korisnika
      this.userService.updateUser(this.userId, userData).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      // Novi korisnik
      this.userService.addUser(userData).subscribe(() => {
        this.userAdded.emit(); // Ako koristiš ovaj event za osvežavanje liste
        this.router.navigate(['/users']); // Ili vrati nazad na listu
      });
    }
  }
}
