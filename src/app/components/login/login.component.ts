import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { window as rxjsWindow } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(@Inject(DOCUMENT) private document: Document, private auth: AuthService) {}

  mostrarAlerta(mgs:string) {
    window.alert(mgs);
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
