import { AnimationEvent } from '@angular/animations';
import { 
  AfterViewInit, 
  Component, 
  ElementRef, 
  ViewChild 
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { 
  collapsedExpanded, 
  routerAnimations, 
  slideAnimation, 
  todoAnimations 
} from './animations';
import { AppState } from './store';
import { addTodo, deleteTodo } from './store/actions/todo.actions';
import { Todo } from './store/reducers/todo.reducer';
import { selectCurrentRoute } from './store/selector/router.selectors';
import { selectTodos } from './store/selector/todo.selectors';

@Component({
  // 指定组件的使用方式, 当前为标记形式
  selector: 'app-root',
  // 关联组件模板文件
  templateUrl: './app.component.html',
  // 关联组件样式文件
  styles: [
  ],
  animations: [
    slideAnimation,
    todoAnimations,
    collapsedExpanded,
    routerAnimations
  ]
})
export class AppComponent implements AfterViewInit {
  collapsed = false
  @ViewChild('AddTodoInput') AddTodoInput!:ElementRef
  todos: Observable<Todo[]>

  constructor(private store:Store<AppState>){
    this.todos = this.store.pipe(select(selectTodos))
    this.store.pipe(select(selectCurrentRoute)).subscribe(console.log)
  }

  ngAfterViewInit(){
    fromEvent<KeyboardEvent>(this.AddTodoInput.nativeElement, 'keyup')
      .pipe(
        filter(event=>event.key==='Enter'),
        map(event=>(<HTMLInputElement>event.target).value),
        map(title=>title.trim()),
        filter(title=>title !== "")
      )
      .subscribe(title=>{
        this.store.dispatch(addTodo({ title }));
        this.AddTodoInput.nativeElement.value="";
      })
  }

  deleteTodo(id: string){
    this.store.dispatch(deleteTodo({id}))
  }

  startSlide(event: AnimationEvent) {
    console.log('animate startSlide',event)
  }
  doneSlide(event: AnimationEvent) {
    console.log('animate doneSlide',event)
  }

  toggle(){
    this.collapsed=!this.collapsed
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animation
    )
  }
}
