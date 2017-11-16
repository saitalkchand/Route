import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if(sessionStorage.isLogin == "true"){
        return true;
    } else {
        this.router.navigate(['/login']);
        return false;
    }
    
  }

}