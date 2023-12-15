import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStore } from './userStore';

@Injectable({
  providedIn: 'root',
})
export class UtentiService {
  constructor(private http: HttpClient, public userStore: UserStore) {}

  getall() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => (this.userStore.users = res));
  }

  getByid(id: number) {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/users/' + id)
      .subscribe((res) => (this.userStore.dettagliUtente = res));
  }
}
