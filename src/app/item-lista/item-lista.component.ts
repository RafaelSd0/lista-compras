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
  itemLista: { nome: string; compra: boolean }[] = []; // Lista de itens não comprados
  itemComprado: string[] = []; // Lista de itens comprados

  ngOnInit() {
    this.loadItems(); // Carrega os itens ao inicializar
  }

  onSubmit(form: any) {
    if (form.valid && this.item.trim() !== '') {
      this.addItem(this.item); // Adiciona o item se o formulário for válido
      this.item = ''; // Limpa o campo de entrada
    }
  }

  addItem(name: string) {
    if (name.trim()) {
      this.itemLista.push({ nome: name, compra: false }); // Adiciona o novo item à lista não comprada
      this.saveItems(); // Salva a lista no LocalStorage
    }
  }

  mudaCompra(index: number) {


    this.itemComprado.push(this.itemLista[index].nome); // Adiciona o nome do item à lista de comprados


    this.itemLista.splice(index, 1);


    this.saveItems(); // Salva a lista atualizada no LocalStorage
  }

  removeItem(index: number) {

    this.itemLista.splice(index, 1); // Remove o item da lista não comprada

    this.saveItems(); // Salva a lista no LocalStorage

  }

  removeItemComprado(index: number){
    this.itemComprado.splice(index, 1); // Remove o item da lista comprada

    this.saveItems(); // Salva a lista no LocalStorage
  }

  saveItems() {
    // Salva ambas as listas no LocalStorage
    const data = {
      itemLista: this.itemLista,
      itemComprado: this.itemComprado,
    };
    localStorage.setItem('shoppingList', JSON.stringify(data)); // Salva as listas como JSON
  }

  loadItems() {
    const data = localStorage.getItem('shoppingList'); // Pega os dados salvos do local storage
    if (data) {
      const parsedData = JSON.parse(data);
      this.itemLista = parsedData.itemLista || []; // Carrega a lista de itens não comprados
      this.itemComprado = parsedData.itemComprado || []; // Carrega a lista de itens comprados
    }
  }
}

