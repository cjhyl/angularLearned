import { Component } from '@angular/core';

@Component({
  // 指定组件的使用方式, 当前为标记形式
  selector: 'app-root',
  // 关联组件模板文件
  templateUrl: './app.component.html',
  // 关联组件样式文件
  styles: [
  ]
})
export class AppComponent {
  constructor(){ }
}