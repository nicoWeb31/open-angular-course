import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(
    private authServ: AuthService,
    private route: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

      if(this.authServ.isAuth){
        return true;
      }else{
        this.route.navigateByUrl('/auth');
      }
    

  }
  


}
