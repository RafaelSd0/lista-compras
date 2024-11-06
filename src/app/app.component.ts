import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthService } from '@auth0/auth0-angular';
import { FooterComponent } from './footer/footer.component';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ItemListaComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'lista-compras';
  constructor(public auth: AuthService, private userService: UserService) {}

  ngOnInit() {
    this.userService.adicionarUsuarioAutenticado().subscribe();
  }
}
