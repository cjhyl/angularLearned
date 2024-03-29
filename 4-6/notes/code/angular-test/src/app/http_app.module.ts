// NgModule: Angular 模块装饰器
import { NgModule } from '@angular/core';
// BrowserModule 提供了启动和运行浏览器应用所必需的服务
// CommonModule 提供各种服务和指令, 例如 ngIf 和 ngFor, 与平台无关
// BrowserModule 导入了 CommonModule, 又重新导出了 CommonModule, 使其所有指令都可用于导入 BrowserModule 的任何模块 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// 根组件
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';

// 调用 NgModule 装饰器, 告诉 Angular 当前类表示的是 Angular 模块
@NgModule({
  // 声明当前模块拥有哪些组件
  declarations: [
    AppComponent
  ],
  // 声明当前模块依赖了哪些其他模块
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  // 声明服务的作用域, 数组中接收服务类, 表示该服务只能在当前模块的组件中使用
  providers: [
    {
      provide: HTTP_INTERCEPTORS,// 拦截器的标识
      useClass: AuthInterceptor,// 使用的拦截器实例名
      multi: true// 固定值，自定义拦截器可以有多个
    }
  ],
  // 可引导组件, Angular 会在引导过程中把它加载到 DOM 中
  bootstrap: [AppComponent]
})
export class AppModule { }
