import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtentiService } from '../utenti/services/utentiService';
import { UserStore } from '../utenti/services/userStore';

@Component({
  selector: 'app-dettagli-utenti',
  template: `
    <div class="container mt-4">
      <h3>Esercizio</h3>
      <div class="row">
        <div class="col-10">
          {{ userStore.dettagliUtente?.name }} {{ user.email }}
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <button (click)="previus()" [disabled]="disablePrevFunction"> previus</button>
      <button class="btn btn-primary mr-2" [routerLink]="'/utenti'">
        Home
      </button>
      <button class="btn btn-success" (click)="next()" [disabled]="disableNextFunction">Next</button>
    </div>
  `,
  styles: ``,
})
export class DettagliUtentiComponent implements OnInit {
  //id= this.acrivatedRoute.snapshot.params['id'];
  disablePrevFunction: boolean = false;
  disableNextFunction: boolean = false;
  user: any = {};
  id = 0;
  constructor(
    public http: HttpClient,
    public acrivatedRoute: ActivatedRoute,
    public router: Router,
    public userService: UtentiService,
    public userStore: UserStore
  ) {}

  ngOnInit(): void {
    this.acrivatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.userService.getByid(this.id);
      /*this.http
        .get<any>('https://jsonplaceholder.typicode.com/users/' + this.id)
        ;*/
    });
  }

  next() {
    const nextId = +this.id + 1;
    nextId < this.userStore.users.length
    ? this.router.navigate(['/utenti', nextId])
    : this.disableNextFunction = true;
  }

  previus(){
    const prevId = +this.id - 1

    prevId <= 0 
      ? this.disablePrevFunction = true
      :  this.router.navigate(['/utenti', prevId]);
    
}
}
