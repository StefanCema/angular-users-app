import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListPageComponent },
  { path: 'add-user', component: UserFormPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
