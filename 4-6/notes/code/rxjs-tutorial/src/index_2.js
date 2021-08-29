import { 
  range, 
  from, 
  forkJoin, 
  fromEvent,
  interval,
  timer,
  of
} from "rxjs"
import { 
  map,
  pluck,
  switchMap,
  take,
  takeWhile,
  takeUntil,
  throttleTime,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators"
import axios from 'axios'

// // range(start, length)，调用方法后返回 observable 对象，被订阅后会发出指定范围的数值
// // 这就是数据流的一种表现，从observable中源源不断发出的数据
// // 操作符通过pipe管道，在订阅之前对数据进行操作，它是中间件函数，是柯里化函数，是函数式编程的应用
// range(1, 10)
// .pipe(
//   map(function(val){
//     return val*10
//   })
// )
// .subscribe(function(val){
//   console.log(val)
// })

// // from 将 Array，Promise, Iterator 转换为 observable 对象。
// // 转换数组
// from(['a','b','c']).subscribe(console.log)
// // 转换Promise
// function p() {
//   return new Promise(function (resolve) {
//     setTimeout(function(){
//       resolve({a:1})
//     },2000)
//   })
// }
// from(p()).subscribe(v => console.log(v))

// // mock接口:
// // http://localhost:3005/goods
// // http://localhost:3005/category
// // forkJoin Rx 版本的 Promise.all()，所有的 Observable 都完成后，才一次性返回值
// axios.interceptors.response.use(response=>response.data)
// forkJoin({
//   goods:from(axios.get('http://localhost:3005/goods')),
//   category:from(axios.get('http://localhost:3005/category'))
// }).subscribe(console.log)

// // fromEvent 将事件转换为 Observable。
// const btn = document.getElementById("btn")
// // 可以将 Observer 简写成一个函数，表示 next
// fromEvent(btn, "click")
// // .pipe(map(function(e){return e.target}))
// // pluck 获取数据流对象中的属性值。 这里获取了e.target,作用和上面的map一致
// // pluck可以传入多个参数，这里相当于map的e.target.id
// .pipe(pluck('target','id'))
// .subscribe(console.log)

// // Interval：每隔一段时间发出一个数值，数值递增
// // interval(1000).subscribe(console.log)
// // timer 用法1 间隔时间过去以后发出数值，行为终止，只执行一次
// // timer(2000).subscribe(n => console.log(n))
// // timer 用法2 间隔时间发出数值后，继续按第二个参数的时间间隔继续发出值，持续执行
// timer(0, 1000).subscribe(n => console.log(n))

// switchMap
// 切换可观察对象。
// const btn = document.getElementById("btn")
// fromEvent(btn, "click")// 这里返回的是fromEvent可观察对象
// .pipe(switchMap(event => interval(1000)))// 在这里把可观察对象切换为interval 每次点击，都会抛弃前一次的可观察对象，重新生成新的可观察对象
// .subscribe(console.log)// 最终订阅的是interval可观察对象

// // take 获取数据流中的前几个
// // takeWhile 根据条件从数据源前面开始获取
// range(1,10)
// // .pipe(take(5))
// .pipe(takeWhile(n=>n<4))
// .subscribe(console.log)

// // takeUntil 接收可观察对象，当可观察对象发出值时，终止主数据源
// // 2秒后终止无限计时器
// interval(100)
// .pipe(takeUntil(timer(2000)))
// .subscribe(console.log)
// // 点击按钮终止页面鼠标移动事件
// fromEvent(document, 'mousemove')
// .pipe(takeUntil(fromEvent(document.getElementById("btn"), 'click')))
// .subscribe(console.log)

// // throttleTime
// // 节流，可观察对象高频次向外部发出数据流，通过 throttleTime 限制在规定时间内每次只向订阅者传递一次数据流。
// fromEvent(document, 'click')
// .pipe(throttleTime(1000))
// .subscribe(console.log)

// // debounceTime
// // 防抖，触发高频事件，只响应最后一次。
// fromEvent(document, 'click')
// .pipe(debounceTime(1000))
// .subscribe(console.log)

// // of
// // 将参数列表作为数据流返回。
// of("a", "b", [], {}, true, 20).subscribe(v => console.log(v))

// distinctUntilChanged
// 检测数据源当前发出的数据流是否和上次发出的相同，如相同，跳过，不相同，发出。
of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
.pipe(distinctUntilChanged())
.subscribe(x => console.log(x))
