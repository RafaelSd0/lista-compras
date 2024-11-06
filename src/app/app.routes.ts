import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'login' }
];
