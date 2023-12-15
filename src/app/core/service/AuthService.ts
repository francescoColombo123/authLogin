import { Injectable } from "@angular/core";
import { Auth } from "../model/Auth";
import { HttpBackend, HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})


export class AuthService{

    dataAuth: Auth | null = null

    constructor(private http: HttpClient, public router: Router){
    }

    login(loginObject: any){
        const params:HttpParams = new HttpParams()
        .set('user', loginObject?.username)
        .set('pass',loginObject?.password)
        
        this.http.get<Auth>('http://localhost:3000/login', {params: params})
        .subscribe(res => {
            this.dataAuth = res
            this.router.navigateByUrl("utenti")
            })
        }

    logout(){
        this.dataAuth = null
        this.router.navigateByUrl("login")
    }

    isLogged(){
        console.log('risultato', this.dataAuth && this.dataAuth.token ? true : false);
        
        return  this.dataAuth && this.dataAuth.token ? true : false
    }


}