import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { UserFormPageComponent } from './user-form-page/user-form-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';


@NgModule({
  declarations: [
    UserListPageComponent,
    UserFormPageComponent,
    UserFormComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
