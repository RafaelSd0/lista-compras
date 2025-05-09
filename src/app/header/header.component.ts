import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuAberto: boolean = false;

  constructor( @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {

  }

  login() {

  }

  logout() {
  
  }

  //Mostrar menu para usuários do Mobile
  mostrarMenu(): void {
    const menu = this.document.querySelector('#menu') as HTMLDivElement | null;
    if (!menu) return;

    this.menuAberto = !this.menuAberto;
    menu.classList.toggle('hidden', !this.menuAberto);
    menu.classList.toggle('flex', this.menuAberto);
  }
}
