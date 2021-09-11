import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path:'create-user',
    component: CreateUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
