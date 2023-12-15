import { Component } from '@angular/core';
import { AuthService } from './core/service/AuthService';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <button routerLink="users">Utenti</button>
    {{ authService.dataAuth?.name }}

    <button (click)="logout()">Logout</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'router2';

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
