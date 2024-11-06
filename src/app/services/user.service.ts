import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient, private auth: AuthService) { }

  adicionarUsuarioAutenticado(): Observable<any> {
    return this.auth.user$.pipe(
      switchMap((user) =>
        this.http.get<any[]>(`${this.apiUrl}?email=${user?.email}`).pipe(
          switchMap((existingUsers) => {
            if (existingUsers.length === 0) {
              // Usuário não existe e é necessário adicionar
              const newUser = {
                name: user?.name,
                email: user?.email,
                id: user?.sub
              };
              return this.http.post(this.apiUrl, newUser);
            } else {
              // Usuário já existe
              return of(existingUsers[0]);
            }
          })
        )
      ),
      catchError((error) => {
        console.error(error)
        return of(null);
      })
    );
  }

}
