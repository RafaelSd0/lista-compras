import { Component, Inject } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  profile!: User | null | undefined;



 constructor(public auth: AuthService) {}



 ngOnInit(): void {

 this.auth.user$.subscribe((profile) => {

 this.profile = profile;

 });

 }
 
}
