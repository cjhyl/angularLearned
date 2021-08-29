import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot, 
  UrlTree 
} from '@angular/router';
import { Observable } from 'rxjs';

// 被Injectable装饰，说明路由守卫是个服务类
@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {
  constructor(private router: Router){}
  // 可返回Promise、boolean、urlTree
  // Promise用于异步操作
  // boolean决定是否可访问
  // urlTree跳转路由
  canActivate(
    route: ActivatedRouteSnapshot,// 跳转的路由信息
    state: RouterStateSnapshot// 跳转的路由信息2
  ): 
  |Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree {
    // console.log('canActivate route', route)
    // 跳转
    // return this.router.createUrlTree(["/home"])//此时返回的类型为UrlTree
    // 允许
    return true
    // 不允许
    // return false
  }
  
}
