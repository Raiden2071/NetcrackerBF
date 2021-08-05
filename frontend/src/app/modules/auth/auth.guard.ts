import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
    this.router.navigateByUrl('/profile');
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log(route);
    // console.log(state);
    
    
    if(true) {
      return false;
    }
    return true;
    
  }
  
}
