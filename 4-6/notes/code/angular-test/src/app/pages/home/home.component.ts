import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CanLeave } from 'src/app/guards/unsave.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {//implements OnInit, CanLeave {

  // canLeave () {
  //   // ts !号表示肯定存在 ?号表示可能存在
  //   // dirty为true表示修改过表单，不能离开页面，当返回false
  //   return !this.form.get('username')!.dirty
  // }

  // form: FormGroup = new FormGroup({
  //   username: new FormControl()
  // })

  // constructor(private router: Router,private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   console.log('路由进入守卫传入的值',this.route.snapshot.data.name)
  // }

  // jump(){
  //   this.router.navigate(["/about", "王五"]
  //   // , {
  //   //   queryParams: {
  //   //     name: "张三"
  //   //   }
  //   // }
  //   )
  // }

}
