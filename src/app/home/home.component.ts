import { Component } from '@angular/core';
import { ItemListaComponent } from '../item-lista/item-lista.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ItemListaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
