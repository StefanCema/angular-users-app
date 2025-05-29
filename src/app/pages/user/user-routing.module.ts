import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormPageComponent } from './user-form-page/user-form-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';

const routes: Routes = [
  { path: '', component: UserListPageComponent },
  { path: 'add', component: UserFormPageComponent },
  {
    path: 'edit/:id',
    component: UserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
