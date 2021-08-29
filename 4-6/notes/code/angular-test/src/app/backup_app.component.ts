import { 
  Component, 
  ElementRef, 
  QueryList, 
  ViewChild, 
  ViewChildren,
  ReflectiveInjector
} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MyValidators } from './myValidators';
import { TestService } from './test.service';

interface Task {
  person?:{
    name: string
  }
}

interface List {
  id: number
  name: string
  age: number
}

@Component({
  // 指定组件的使用方式, 当前为标记形式
  // app-home   =>  <app-home></app-home>
	// [app-home] =>  <div app-home></div>
  // .app-home  =>  <div class="app-home"></div>
  selector: 'app-root',
  // 关联组件模板文件
  // templateUrl:'组件模板文件路径'
	// template:`组件模板字符串`
  templateUrl: './app.component.html',
  // 关联组件样式文件
  // styleUrls : ['组件样式文件路径']
	// styles : [`组件样式`] 可在html中添加<style></style>，也可在这里添加样式
  styles: [
    `
    input.ng-touched.ng-invalid {
      border: 2px solid red;
    }
    `
  ]
})
export class AppComponent {
  constructor(private tests: TestService){
    console.log('test Service in app', tests)
  }
  message: string = 'hello angular';
  htmlString: string = '<b>htmlString</b>';
  getInfo(){
    return 'message from getInfo'
  };

  title = 'angular-test';
  imgUrl = 'https://www.baidu.com/img/flexible/logo/pc/result.png';
  testNgif:List[] = [{
    id:1,
    name:'aaa',
    age:10
  },{
    id:2,
    name:'bbb',
    age:18
  },{
    id:3,
    name:'ccc',
    age:8
  }];

  task: Task = {
    person: {
      name: '张三'
    }
  }

  date = new Date()
  money = 653371

  testLongStr = "自定义指令需求：指定字符串不能超过规定的长度，否则截取，并最后显示省略号"

  testClick(e: Event){
    console.log('this', this)
    console.log('event', e)
  }

  onKeyUp(inputbox: HTMLInputElement){
    console.log('input box',inputbox);
  }
  onClick(button: HTMLButtonElement){
    console.log('button',button);
  }

  @ViewChild('btn') btn:ElementRef<HTMLButtonElement> | undefined
  @ViewChild('username') userBox:ElementRef<HTMLInputElement> | undefined
  @ViewChildren('items') liItems:QueryList<HTMLLIElement> | undefined
  // 和教程情况不太一样，不需要引入AfterViewInit接口，不知道是因为这是根组件，还是因为版本
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
    console.log('username box',this.userBox?.nativeElement)
    console.log('button',this.btn?.nativeElement)
    console.log('li items',this.liItems?.toArray())
  }

  bindusername: string = 'bindusername';
  bindusernameChange(){
    this.bindusername = '123'
  }
  changeTaskObj(){
    this.task = {};
  }
  listid(index:number, item:List){
    return item.id
  }

  getDataFromChild(e:string){
    console.log('getDataFromChild',e)
  }

  testName:string = '张三'
  testAge:number = 20
  persomRemove: boolean = false

  testChange(){
    // this.testName = "李四"
    // this.testAge = 30
    // this.testNgif[0].name="王五"
    // this.testNgif[0].age=50
    this.persomRemove = !this.persomRemove;
  }

  onSubmit(form: NgForm){
    console.log('form.value', form.value)
    console.log('form.valid', form.valid)
  }

  contactForm: FormGroup = new FormGroup({
    user: new FormGroup({
      username: new FormControl(
        "默认用户名", 
        [
          Validators.required,
          Validators.minLength(2),
          MyValidators.cannotContainSpace
        ], 
        MyValidators.shouldBeUnique
      ),
    }),
    phone: new FormControl(13650559631)
  })

  get username2() {
    // console.log('this.contactForm.get(["user","username"])!',this.contactForm.get(["user","username"])!)
    return this.contactForm.get(["user","username"])!
  }

  onSubmit2(){
    console.log('onSubmit2 valid', this.contactForm.valid)
    console.log('onSubmit2 form value', this.contactForm.value)
    console.log('onSubmit2 username value',this.contactForm.value.user.username,this.contactForm.get(["user", "username"])?.value)
  }
}

// 服务类
class MailService {}
// 创建注入器并传入服务类 ReflectiveInjector即将被废弃
// const injector = ReflectiveInjector.resolveAndCreate([MailService])

//获取注入器中的服务类实例对象
// const mailService = injector.get(MailService)
// console.log('mailService',mailService)

//服务实例对象为单例模式，注入器在创建服务实例后会对其进行缓存
//Angular服务能在各组件间共享数据，原因就是服务实例对象为单例模式
// const mailService1 = injector.get(MailService)
// const mailService2 = injector.get(MailService)
// console.log('mailService1 === mailService2',mailService1 === mailService2) // true

//不同的注入器返回不同的服务实例对象
// const injector = ReflectiveInjector.resolveAndCreate([MailService])
// const childInjector = injector.resolveAndCreateChild([MailService])
// const mailService1 = injector.get(MailService)
// const mailService2 = childInjector.get(MailService)
// console.log('mailService1 === mailService2',mailService1 === mailService2) //false

//服务实例的查找类似函数作用域链，当前级别可以找到就使用当前级别，当前级别找不到去父级中查找
// const injector = ReflectiveInjector.resolveAndCreate([MailService])
// const childInjector = injector.resolveAndCreateChild([])
// const mailService1 = injector.get(MailService)
// const mailService2 = childInjector.get(MailService)
// console.log('mailService1 === mailService2',mailService1 === mailService2) //true

//配置注入器的对象，指定了创建实例对象的服务类和访问服务实例对象的标识
//上面直接传入服务类的写法是简写，这里是完整写法
// const injector = ReflectiveInjector.resolveAndCreate([
//   { provide: MailService, useClass: MailService }
// ])
// const mailService = injector.get(MailService)
// console.log('mailService',mailService)

//访问依赖对象的标识也可以是字符串类型
// const injector = ReflectiveInjector.resolveAndCreate([
//   { provide: 'mail', useClass: MailService }
// ])
// const mailService = injector.get('mail')
// console.log('mailService',mailService)

//使用useValue直接存储一个对象
// const injector = ReflectiveInjector.resolveAndCreate([
//   {
//     provide: "Config",
//     useValue: Object.freeze({
//       APIKEY: "API1234567890",
//       APISCRET: "500-400-300"
//     })
//   }
// ])
// const Config = injector.get("Config")
// console.log('Config',Config);

