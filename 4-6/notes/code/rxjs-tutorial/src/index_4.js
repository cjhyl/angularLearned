import { fromEvent, from } from "rxjs"
import { debounceTime, distinctUntilChanged, map, switchMap } from "rxjs/operators"
import axios from "axios"

const search = document.getElementById("search")

// 注册文本框键盘抬起事件
fromEvent(search, "keyup")
  .pipe(
    // 700毫秒防抖
    debounceTime(700),
    // 从文本框中获取文本字符
    map(event => event.target.value),
    // 过滤重复数据触发
    distinctUntilChanged(),
    // 切换可观察对象
    switchMap(keyword =>
      // 把axios返回的Promise作为可观察对象
      from(
        axios.get(`https://jsonplaceholder.typicode.com/posts?q=${keyword}`)
      )
    )
  )
  .subscribe(console.log)