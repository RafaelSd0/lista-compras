import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ItemListaComponent } from './item-lista/item-lista.component';

export const routes: Routes = [
  {path:'lista', component:ItemListaComponent, canActivate:[AuthGuard]},
  {path:'**', redirectTo:'lista'}
];
