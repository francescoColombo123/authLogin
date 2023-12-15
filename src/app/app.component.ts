import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/AuthService';
import { UserStore } from './features/utenti/services/userStore';
import { UtentiService } from './features/utenti/services/utentiService';

@Component({
  selector: 'app-root',
  template: `
  
    <div *ngIf="authService.isLogged()" >
    <button routerLink="users" class="btn btn-primary mr-2">Utenti</button>
    <span>{{ authService.dataAuth?.name }}</span>
    <button (click)="logout()" class="btn btn-danger ml-2">Logout</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'router2';

  constructor(
    public authService: AuthService,
    public userStore: UserStore,
    public utentiService: UtentiService
  ) {}

  logout() {
    this.authService.logout();
  }
}
