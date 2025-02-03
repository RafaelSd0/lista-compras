import { Routes } from '@angular/router';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'lista', component:ItemListaComponent}
];
