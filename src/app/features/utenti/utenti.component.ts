import { Component, OnInit } from '@angular/core';

import { UtentiService } from './services/utentiService';
import { UserStore } from './services/userStore';

@Component({
  selector: 'app-utenti',
  template: `
    <div class="container mt-4">
  <h3 class="text-center mb-4">Esercizio</h3>
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nome Utente</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of userstore1.users">
            <td>
              <a [routerLink]="['/utenti', user.id]">{{ user.name }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  `,
  styles: ``,
})
export class UtentiComponent implements OnInit {
  constructor(
    private utentiService: UtentiService,
    public userstore1: UserStore
  ) {}
  ngOnInit(): void {
    this.utentiService.getall();
  }
}
