import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent {//implements OnInit {
  // // 注入路由对象
  // constructor(private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   // this.route.queryParamMap.subscribe(query => {
  //   //   console.log('queryName',query.get("name"))
  //   // });
  //   this.route.paramMap.subscribe(params => {
  //     console.log('paramsName',params.get("name"))
  //   });
  // }

}
