import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'lista', component:ItemListaComponent, canActivate:[AuthGuard]},
  {path:'home', component:HomeComponent},
  {path:'**', redirectTo:'home'}
];
