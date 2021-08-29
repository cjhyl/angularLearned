import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
//引入服务类
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [
  ]
})
export class PersonComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges, OnDestroy {

  @Input("name") name: string = ""
  @Input("age") age: number | string = 0
  @Input("person") person: object = {}

  @Output() sendData = new EventEmitter()

  @ContentChild("box") box: ElementRef<HTMLDivElement> | undefined

  @ViewChild("p") p: ElementRef<HTMLParagraphElement> | undefined

  constructor(private test: TestService) {
    // console.log('组件类初始化 constructor',test,this.test,this.name)
    console.log('组件类初始化时接收服务类',test,this.test)
  }

  ngOnInit(): void {
    console.log('首次接收到属性值 ngOnInit',this.name,this.age, this.box)
  }

  ngAfterContentInit(): void {
    // console.log('投影渲染完毕 ngAfterContentInit', this.box,this.p)
  }

  ngAfterViewInit(): void {
    // console.log('视图渲染完毕 ngAfterViewInit',this.p)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges', this.name, this.age, this.person, changes)
  }

  ngOnDestroy() {
    console.log("组件被卸载")
  }

  onClick(){
    this.sendData.emit('子组件数据')
  }

}
