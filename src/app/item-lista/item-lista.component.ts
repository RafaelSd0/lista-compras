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
  id: number = 0;
  userId: string | undefined;
  itemLista: { id: number; nome: string }[] = []; // Lista de itens não comprados
  itemComprado: { id: number; nome: string }[] = []; // Lista de itens comprados


  // Método para salvar a lista de compras 
  salvarLista() {
   
  }

 // Método para carregar a lista de compras
  carregarLista() {
    
  }

  // Método para adicionar um item à lista não comprada
  addItem(nome: string) {
    if (nome.trim()) {
      this.itemLista.push({ id: this.id++, nome });
      this.salvarLista();
    }
  }

  // Método chamado quando o formulário é enviado
  onSubmit(form: any) {
    if (form.valid && this.item.trim() !== '') {
      this.addItem(this.item);
      this.item = '';
    }
  }

  // Método para editar o nome de um item
  editaItem(item: any) {
    const novoNome = window.prompt('Insira o novo nome:', item.nome);
    if (novoNome) {
      item.nome = novoNome;
      this.salvarLista();
    }
  }

  // Método para mover um item da lista não comprada para a lista comprada
  mudaCompra(index: number) {
    const item = this.itemLista.splice(index, 1)[0];
    this.itemComprado.push(item);
    this.salvarLista();
  }

  // Método para remover um item da lista não comprada
  removeItem(index: number) {
    this.itemLista.splice(index, 1);
    this.salvarLista();
  }

  // Método para remover um item da lista comprada
  removeItemComprado(index: number) {
    this.itemComprado.splice(index, 1);
    this.salvarLista();
  }


}

