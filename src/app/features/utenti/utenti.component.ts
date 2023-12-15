import { Component, OnInit } from '@angular/core';
import { UtentiService } from './services/utentiService';
import { UserStore } from './services/userStore';

@Component({
  selector: 'app-utenti',
  template: `
    <div class="container text-center mt-4">
      <h3>Esercizio</h3>
      <div class="row justify-content-center">
        <div class="col-8">
          <div *ngFor="let user of userstore1.users" class="mb-3">
            <div class="card">
              <div class="card-body">
                <a [routerLink]="['/utenti', user.id]">
                  <h5 class="card-title">{{ user.name }}</h5>
                </a>
              </div>
            </div>
          </div>
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
