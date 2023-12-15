import { Component } from '@angular/core';
import { AuthService } from '../service/AuthService';

@Component({
  selector: 'app-login',
  template: `
   <form #f="ngForm" (submit)="authService.login(f.value)">
    <input type="text" required placeholder="Username" name="username" ngModel />
    <input type="password" required placeholder="Password" name="password" ngModel />
    <button type="submit">Submit</button>
</form>


  `,
  styles: ``
})
export class LoginComponent {

  constructor(public authService: AuthService){

  }

}
