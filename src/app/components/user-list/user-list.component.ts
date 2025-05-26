import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnChanges {
  @Input() refreshTrigger: number = 0;

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['refreshTrigger']) {
      this.fetchUsers();
    }
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
