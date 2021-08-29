var box = document.getElementById('box')

// // 原生 JavaScript
// box.onmousedown = function (event) {
//   let distanceX = event.clientX - event.target.offsetLeft
//   let distanceY = event.clientY - event.target.offsetTop
//   document.onmousemove = function (event) {
//     let positionX = event.clientX - distanceX
//     let positionY = event.clientY - distanceY
//     box.style.left = positionX + "px"
//     box.style.top = positionY + "px"
//   }
//   box.onmouseup = function () {
//     document.onmousemove = null
//   }
// }

import { fromEvent } from "rxjs"
import { map, switchMap, takeUntil } from "rxjs/operators"

fromEvent(box, "mousedown")
.pipe(
  // map转换传出初始坐标数据
  map(event => ({
    distanceX: event.clientX - event.target.offsetLeft,
    distanceY: event.clientY - event.target.offsetTop
  })),// pipe中用逗号分离各步骤的操作符，从前往后执行
  // 切换到document的mousemove事件流
  switchMap(({ distanceX, distanceY }) =>
    fromEvent(document, "mousemove").pipe(
      // 计算并输出移动后的坐标数据
      map(event => ({
        left: event.clientX - distanceX,
        top: event.clientY - distanceY
      })),
      // 当鼠标抬起，终止数据流
      takeUntil(fromEvent(document, "mouseup"))
    )
  )
)
// 订阅 使用计算出的移动后坐标数据设置元素新坐标
.subscribe(({ left, top }) => {
  box.style.left = left + "px"
  box.style.top = top + "px"
})