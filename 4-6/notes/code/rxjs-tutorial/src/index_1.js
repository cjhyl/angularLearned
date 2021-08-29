import { Subject, BehaviorSubject, ReplaySubject } from "rxjs"

// // Subject：用于创建空的可观察对象，在订阅后不会立即执行，next 方法可以在可观察对象外部调用
// const demoSubject = new Subject()

// demoSubject.subscribe({next: function (value) {console.log(value)}})
// demoSubject.subscribe({next: function (value) {console.error(value)}})

// setTimeout(function () {
//   demoSubject.next("hello")
// }, 2000)


// // BehaviorSubject: 拥有 Subject 全部功能，但是在创建 Obervable 对象时可以传入默认值，观察者订阅后可以直接拿到默认值。
// const demoBehavior = new BehaviorSubject("默认值")
// demoBehavior.subscribe({next: function (value) {console.log(value)}})
// setTimeout(function(){
//   demoBehavior.next("Hello")
// }, 1000)

// ReplaySubject:与Subject订阅方式处理不同，Subject不会广播历史结果，ReplaySubject 会广播所有历史结果
const rSubject = new ReplaySubject()

rSubject.subscribe(value => {
  console.log(value)
})

rSubject.next("Hello 1")
rSubject.next("Hello 2")

setTimeout(function () {
  rSubject.subscribe({next: function (value) {console.error(value)}})
}, 2000)

