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
  item: string = ''; // Nome do item
  itemLista: { nome: string; compra: boolean}[] = []; // Lista de itens não comprados
  itemComprado: string[] = []; // Lista de itens comprados


  onSubmit(form: any) {
    if (form.valid && this.item.trim() !== '') {
      this.addItem(this.item); // Adiciona o item se o formulário for válido
      this.item = ''; // Limpa o campo de entrada
    }
  }

  toggleEdit(item: any) {

    item.nome = window.prompt('insira o novo nome');

  }

  addItem(name: string) {
    if (name.trim()) {
      this.itemLista.push({ nome: name, compra: false }); // Adiciona o novo item à lista não comprada
    }
  }

  mudaCompra(index: number) {


    this.itemComprado.push(this.itemLista[index].nome); // Adiciona o nome do item à lista de comprados


    this.itemLista.splice(index, 1);



  }

  removeItem(index: number) {

    this.itemLista.splice(index, 1); // Remove o item da lista não comprada


  }

  removeItemComprado(index: number){
    this.itemComprado.splice(index, 1); // Remove o item da lista comprada


  }


}

