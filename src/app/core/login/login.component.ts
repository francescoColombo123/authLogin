import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/AuthService';
import { UserStore } from '../../features/utenti/services/userStore';
import { UtentiService } from '../../features/utenti/services/utentiService';

@Component({
  selector: 'app-login',
  template: `
    <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form #myForm="ngForm" (ngSubmit)="authService.login(myForm)" class="needs-validation" novalidate>
        <!-- Username input -->
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            required
            minlength="5"
            placeholder="Username"
            name="username"
            ngModel
            #username="ngModel"
            [ngClass]="{
              'is-invalid': username.invalid && (username.dirty || username.touched)
            }"
          />
          <div *ngIf="username.invalid && (username.dirty || username.touched)" class="invalid-feedback">
            Username is required and must be at least 5 characters long.
          </div>
        </div>

        <!-- Password input -->
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            required
            placeholder="Password"
            name="password"
            ngModel
            #password="ngModel"
            [ngClass]="{
              'is-invalid': password.invalid && (password.dirty || password.touched)
            }"
          />
          <div *ngIf="password.invalid && (password.dirty || password.touched)" class="invalid-feedback">
            Password must contain at least 7 characters, 1 uppercase letter, and 1 number.
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block" [disabled]="myForm.invalid">Submit</button>
      </form>
    </div>
  </div>
</div>

  `,
  styles: `

.error {
  border: 1px solid red; /* Esempio di stile di errore per i campi */
}

.error-message {
  color: red; /* Colore del messaggio di errore */
  font-size: 12px;
}
  `,
})
export class LoginComponent {
  constructor(
    public authService: AuthService,
    public userStore: UserStore,
    public utentiService: UtentiService
  ) {}
}
