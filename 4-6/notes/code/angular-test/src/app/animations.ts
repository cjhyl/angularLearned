import { 
  animate, 
  animateChild, 
  animation, 
  group, 
  keyframes, 
  query, 
  stagger, 
  state, 
  style, 
  transition, 
  trigger,
  useAnimation
} from '@angular/animations';

export const slideAnimationEnter = animation([
  // 指定元素未入场前的样式
  style({ opacity: 0, transform: "translateY(40px)" }),
  // 指定元素入场后的样式及运动参数
  // animate(250, style({ opacity: 1, transform: "translateY(0)" }))
  // 注1：入场动画中可以不指定元素的默认状态，Angular 会将 void 状态清空作为默认状态
  animate(250)
])

export const slideAnimationOut = animation([
  animate(
    // 动画入参定义
    "{{ duration }} {{ delay }} {{ easing }}",
    // 帧动画 offset动画运行阶段百分比
    keyframes([
      style({ offset: 0.3, transform: "translateX(-80px)" }),
      style({ offset: 1, transform: "translateX(100%)" })
    ])
  )
], {
  // 动画入参默认值
  params: {
    duration: "600ms",
    delay: "100ms",
    easing: "ease-out"
  }
})

// 创建动画, 动画名称为 slide
export let slideAnimation = trigger("slide", [
  // 指定入场动画 注意: 字符串两边不能有空格, 箭头两边可以有也可以没有空格
  // void => * 可以替换为 :enter
  transition("void => *", useAnimation(slideAnimationEnter)),
  // 指定出场动画
  // // * => void 可以替换为 :leave
  // transition("* => void", [
  //   // 指定元素出场后的样式和运动参数
  //   // animate(600, style({ opacity: 0, transform: "translateX(100%)" }))
  //   // 注2：要设置动画的运动参数，需要将 animate 方法的一个参数更改为字符串类型
  //   // 动画执行总时间 延迟时间 (可选) 运动形式 (可选)
  //   animate("600ms 1s ease-out", style({ opacity: 0, transform: "translateX(100%)" }))
  // ])
  transition("* => void", useAnimation(slideAnimationOut,{
    //动画入参调用
    params: {
      delay: "1s"
    }
  }))
])

export let todoAnimations = trigger("todoAnimations", [
  transition(":enter", [
    // 默认情况下，父级动画和子级动画依次执行，使用 group 方法让其同时执行
    group([
      query('h2', [
        style({ opacity: 0, transform: "translateY(-30px)" }),
        animate(300)
      ]),
      // 默认情况下，多个元素动画同时执行，使用stagger让每个元素依次延迟执行
      query("@slide", stagger(200,animateChild()))
    ])
  ])
])

// 自定义状态动画
export let collapsedExpanded = trigger("collapsedExpanded", [
  // 使用 state 方法定义默认的折叠状态元素对应的样式
  state(
    "collapsed",
    style({
      height: 0,
      overflow: "hidden",
      paddingTop: 0,
      paddingBottom: 0
    })
  ),
  // 使用 state 方法定义展开状态元素对应的样式
  state(
    "expanded", 
    style({ 
      height: "*", 
      overflow: "auto" 
    })
  ),
  // 定义展开动画
  transition("collapsed => expanded", animate("400ms ease-out")),
  // 定义折叠动画
  transition("expanded => collapsed", animate("400ms ease-in"))
])

export let routerAnimations = trigger("routerAnimations", [
  // 顺序
  transition("one => two, one => three, two => three", [
    // 进场动画初始
    query(":enter", style({ transform: "translateX(100%)", opacity: 0 })),
    group([
      // 进场动画结束
      query(
        ":enter",
        animate(
          "0.4s ease-in",
          style({ transform: "translateX(0)", opacity: 1 })
        )
      ),
      // 离场动画结束
      query(
        ":leave",
        animate(
          "0.4s ease-out",
          style({
            transform: "translateX(-100%)",
            opacity: 0
          })
        )
      )
    ])
  ]),
  // 逆序
  transition("three => two, three => one, two => one", [
    query(
      ":enter",
      style({ transform: "translateX(-100%)", opacity: 0 })
    ),
    group([
      query(
        ":enter",
        animate(
          "0.4s ease-in",
          style({ transform: "translateX(0)", opacity: 1 })
        )
      ),
      query(
        ":leave",
        animate(
          "0.4s ease-out",
          style({
            transform: "translateX(100%)",
            opacity: 0
          })
        )
      )
    ])
  ])
])
