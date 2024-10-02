import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-lista',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './item-lista.component.html',
  styleUrl: './item-lista.component.css'
})
export class ItemListaComponent {

  item: string = '';
  itemLista: string[] = [];

  onSubmit(form: any) {
    if (form.valid) {
      this.itemLista.push(this.item);
      this.item = '';
      console.log('Item adicionado:', this.itemLista);
    }
  }
}
