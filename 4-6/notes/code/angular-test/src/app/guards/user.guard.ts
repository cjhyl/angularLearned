import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivateChild, 
  Router, 
  RouterStateSnapshot, 
  UrlTree 
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {
  constructor(private router: Router){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): 
  | Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree 
  {
    // 跳转
    // return this.router.createUrlTree(["/home"])//此时返回的类型为UrlTree
    // 允许
    return true
    // 不允许
    // return false
  }
  
}
