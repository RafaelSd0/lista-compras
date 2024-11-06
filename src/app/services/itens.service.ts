import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private apiUrl = 'http://localhost:3000/shoppingLists';
  constructor(private http: HttpClient, private auth: AuthService) {}

  // Método para enviar as listas de compras do usuário autenticado ao json-server
  salvarListaDeCompras(userId: string, itemLista: any[], itemComprado: any[] ): Observable<any>{
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`).pipe(
      switchMap((existingLists) => {
        if (existingLists.length > 0) {
          // Se uma lista do usuário já existe, faça um PATCH para atualizá-la
          const existingListId = existingLists[0].id;
          return this.http.patch(`${this.apiUrl}/${existingListId}`, {
            itemLista,
            itemComprado
          });
        } else {
          // Se não existir, crie uma nova lista para o usuário
          return this.http.post(this.apiUrl, { userId, itemLista, itemComprado });
        }
      }),
      catchError(error => {
        console.error('Erro ao salvar ou atualizar a lista:', error);
        return of(error);
      })
    );
  }

  // Método para carregar as listas de compras do usuário autenticado ao json-server
  carregarListaDeCompras(userId: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`).pipe(
      switchMap((lists) => lists.length > 0 ? of(lists[0]) : of(null)),
      catchError(error => {
        console.error('Erro ao carregar a lista:', error);
        return of(null);
      })
    );
  }

}
