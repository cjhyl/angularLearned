// NgModule: Angular 模块装饰器
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// BrowserModule 提供了启动和运行浏览器应用所必需的服务
// CommonModule 提供各种服务和指令, 例如 ngIf 和 ngFor, 与平台无关
// BrowserModule 导入了 CommonModule, 又重新导出了 CommonModule, 使其所有指令都可用于导入 BrowserModule 的任何模块 
import { BrowserModule } from '@angular/platform-browser';

// 根组件
import { AppComponent } from './app.component';
// import { SharedModule } from './shared/shared.module';
import { DemoComponent } from './demo/demo.component';
import { HoverDirective } from './directives/hover.directive';
import { SummaryPipe } from './pipes/summary.pipe';
import { PersonComponent } from './components/person/person.component';
import { Demo1Module } from './demo1/demo1.module';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { AppRoutingModule } from './app-routing.module';

// 调用 NgModule 装饰器, 告诉 Angular 当前类表示的是 Angular 模块
@NgModule({
  // 声明当前模块拥有哪些组件
  declarations: [
    AppComponent,
    DemoComponent,
    HoverDirective,
    SummaryPipe,
    PersonComponent,
    FormArrayComponent,
    FormBuilderComponent,
    CheckboxComponent,
    RadioComponent
  ],
  // 声明当前模块依赖了哪些其他模块
  imports: [
    BrowserModule,
    // SharedModule,
    FormsModule,//模板驱动表单--表单模板
    Demo1Module,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  // 声明服务的作用域, 数组中接收服务类, 表示该服务只能在当前模块的组件中使用
  providers: [],
  // 可引导组件, Angular 会在引导过程中把它加载到 DOM 中
  bootstrap: [AppComponent]
})
export class AppModule { }
