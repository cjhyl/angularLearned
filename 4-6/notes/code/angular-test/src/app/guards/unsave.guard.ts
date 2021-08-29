import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanLeave {
  canLeave: () => boolean
}

@Injectable({
  providedIn: 'root'
})
export class UnsaveGuard implements CanDeactivate<CanLeave> {
  canDeactivate(
    component: CanLeave,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.canLeave()){
      return true
    } else {
      if(confirm('表单被修改，确认要离开？')){
        return true
      } else {
        return false
      }
    }
  }
  
}
