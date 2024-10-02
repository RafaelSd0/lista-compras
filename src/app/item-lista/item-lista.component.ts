import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-lista.component.html',
  styleUrl: './item-lista.component.css'
})
export class ItemListaComponent {

  item: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Item adicionado:', this.item);
      // Lógica para adicionar o item à lista
    }
  }
}
