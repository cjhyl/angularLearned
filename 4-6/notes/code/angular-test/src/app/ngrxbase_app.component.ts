import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { AppState } from './store';
import { async_increment, decrement, increment } from './store/actions/counter.actions';
import { selectCount } from './store/selectors/counter.selectors';

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
  count: Observable<number>
  constructor(private store: Store<AppState>){
    this.count = this.store.pipe(select(selectCount))
  }
  increment() {
    this.store.dispatch(increment({count: 5}))
  }
  decrement() {
    this.store.dispatch(decrement())
  }
  // 2. 在组件类中新增 increment_async 方法，并在方法中触发执行异步操作的 Action
  async_increment(){
    this.store.dispatch(async_increment())
  }
}
