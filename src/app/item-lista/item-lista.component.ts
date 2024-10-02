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
  item: string = '';               // Nome do item
  itemLista: { nome: string; compra: boolean }[] = []; // Lista de itens com status
  itemComprado: string[] = [];

  onSubmit(form: any) {
    if (form.valid && this.item.trim() !== '') {
      this.itemLista.push({ nome: this.item, compra: false }); // Adiciona item com status 'não comprado'
      this.item = ''; // Limpa o campo de entrada
    }
  }

  mudaCompra(index: number) {
    this.itemLista[index].compra = !this.itemLista[index].compra;// Inverte o estado 'bought'

    this.itemComprado.push(this.itemLista[index].nome);

    this.itemLista.splice(index, 1);

  }



}
