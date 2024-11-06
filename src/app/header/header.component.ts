import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService, User } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  profile!: User | null | undefined;

  constructor(public auth: AuthService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {

    this.auth.user$.subscribe((profile) => {

    this.profile = profile;

    });
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }

  //Mostrar menu mara usuarios do Mobile
  mostrarMenu(aberto:boolean): void{
    aberto = false;
    const menu = this.document.querySelector('#menu') as HTMLDivElement;
    if (aberto) {
      menu.classList.remove('hidden');
      menu.classList.add('flex');
    } else {
      menu.classList.remove('flex');
      menu.classList.add('hidden');
    }
  }
}
