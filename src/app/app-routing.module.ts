import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router'
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
  {path: 'user' , component: UserComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'user-detail/:id' , component: UserDetailComponent},
  {path: 'login' , component: LoginComponent},
  {path: '',redirectTo: '/home' , pathMatch: 'full'},
   
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

