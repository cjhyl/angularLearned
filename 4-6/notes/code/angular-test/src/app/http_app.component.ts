import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  // 指定组件的使用方式, 当前为标记形式
  selector: 'app-root',
  // 关联组件模板文件
  templateUrl: './app.component.html',
  // 关联组件样式文件
  styles: [
  ]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){ }
  ngOnInit() {
    // let params = new HttpParams({
    //   // fromObject: {name:'zhangsan', age:'20'} // 注: 参数的值必须是字符型
    //   fromString: 'name=zhangsan&age=20'
    // })
    // params = params.append('sex', 'male');// 注: 直接使用append不会生效，需重新赋值

    // let headers = new HttpHeaders({ test: "Hello" })
    // this.http.get("https://jsonplaceholder.typicode.com/users", {
    //   // params
    //   // headers
    //   observe: "body"// response 读取完整响应体 body 读取服务器端返回的数据
    // }).subscribe(console.log)

    this.http.get('/api/hello')
    .subscribe(console.log)
  }
}