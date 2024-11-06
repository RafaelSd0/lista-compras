import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private apiUrl = 'http://localhost:3000/shopping-list';
  constructor(private http: HttpClient, private auth: AuthService) {}

  getUserShoppingList(): Observable<any> {
    return this.auth.user$.pipe(
      switchMap((user) =>
        this.http.get<any[]>(`${this.apiUrl}?userId=${user?.sub}`).pipe(
          map((shoppingLists) => shoppingLists || [])
        )
      )
    );
  }


}
