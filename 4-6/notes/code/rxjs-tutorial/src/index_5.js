import axios from "axios"
import { from, fromEvent } from "rxjs"
import { pluck, concatMap } from "rxjs/operators"

const button = document.getElementById("btn")

fromEvent(button, "click")
  .pipe(
    // concatMap 合并可观察对象
    concatMap(event =>
      // from 转换Promise为可观察对象
      from(axios.get("http://localhost:3005/token"))
      .pipe(
        // pluck 输出结果数据的data.token
        pluck("data", "token")
      )
    ),
    concatMap(token =>
      from(axios.get("http://localhost:3005/userInfo"))
      .pipe(pluck("data"))
    )
  )
  .subscribe(console.log)