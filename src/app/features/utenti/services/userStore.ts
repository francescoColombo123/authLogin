import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserStore{
    users: any[] = [];

    dettagliUtente: any = {}
}