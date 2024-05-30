import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LOGGED_USER_ITEM } from "../model/auth";
import {of} from "rxjs"

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserLoggedInGuard implements CanActivate {
    
    constructor(private route: Router) {}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
       const userLogged = localStorage.getItem(LOGGED_USER_ITEM);
       if(userLogged !== null && userLogged === "true") {
        return of(true)
       } else {
        this.route.navigate(["/login"])
        return of(false)
       }
    }
    
}