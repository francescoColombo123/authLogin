import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./service/AuthService";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {


    constructor( public authService: AuthService, public router: Router){

    }

    canActivate() {
      const isAuth =  this.authService.isLogged()
      if(!isAuth){
        this.router.navigateByUrl("/login")
      }
      return isAuth;
    }

}