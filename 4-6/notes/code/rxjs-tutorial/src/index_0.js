import { Observable } from "rxjs"

// 可观察对象 ( Observable ) ：
// 类比 Promise 对象，内部可以用于执行异步代码，
// 通过调用内部提供的方法将异步代码执行的结果传递到可观察对象外部。
const observable = new Observable(function (observer) {
  // setTimeout(function () {
  //   // 把数据传递出去，类比 Promise 的 resolve
  //   observer.next({
  //     name: "张三"
  //   })
  // }, 2000)

  //可观察对象特性1:可多次调用 next 方法向外发送数据。
  let index = 0
  let timer = setInterval(function () {
    observer.next(index++)
    if (index === 4) {
      // 特性2:可以调用 complete 方法终止数据发送。
      // observer.complete()
      // 特性3:可以调用 error 方法将失败信息发送给订阅者，同时 Observable 终止
      observer.error("发生错误")
      observer.next('不生效')// Observable 终止后再调用next是不生效的
      clearInterval(timer)
    }
  }, 1000)
})

// 观察者 ( Observer )：
// 类比 then 方法中的回调函数，用于接收可观察对象中传递出来数据。
const observer = {
  next: function (value) {
    console.log(value)
  },
  // 可观察对象的complete方法回调
  complete: function () {
    console.log("数据发送完成")
  },
  // 错误回调
  error: function (error) {
    console.log(error)
  }
}

// 订阅 ( subscribe )：
// 类比 then 方法，通过订阅将可观察对象和观察者连接起来，
// 当可观察对象发出数据时，订阅者可以接收到数据。
let subscription = observable.subscribe(observer)
//可观察对象特性4:订阅后才执行  5:每次被订阅时都会得到执行
setTimeout(function(){
  observable.subscribe(observer)
},1500)
setTimeout(function(){
  // 可观察对象特性6:终止订阅
  console.log('终止订阅')
  subscription.unsubscribe()
}, 2000)
