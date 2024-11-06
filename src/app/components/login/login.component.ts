import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  document: any;

  constructor(public auth: AuthService) {}

  mostrarAlerta(msg: string){
    window.alert(msg)
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {

    this.mostrarAlerta("logout realizado com sucesso");
    this.auth.logout({

    logoutParams: {returnTo: this.document.location.origin,},

    });

  }

}
