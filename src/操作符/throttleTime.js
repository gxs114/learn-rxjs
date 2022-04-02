import { interval, map, take, throttle, throttleTime, timer } from 'rxjs'

/* 
  节流 
  throttleTime throttle
  内部有一个定时器，每当发射时开始计时，计时期间会忽略所有来自源头的值达到节流的目的
  当且仅当计时结束后才会接收新值，然后再次开始计时

  throttleTime( time: number ) 
    参数是数字，忽略多长时间的值

  throttle( fn: (value)=>Observable ) 
    参数是一个，接收上层值然后返回一个观察者的函数
    意思是只有当返回的观察者发射值了，就相当于一次计时器的完成
    因为参数是函数，所以可以动态调整计时器的持续时间

  相似的有
    防抖？节流？ auditTime audit
    防抖 debounceTime debounce
*/

// 模拟input快速输入
const input$ = interval(500).pipe(
  map(v => v + 1),
  take(3)
)

input$.pipe(throttleTime(1000)).subscribe(console.log)
// input$
//   .pipe(throttle(() => (Math.random() > 0.5 ? timer(5000) : timer(1000))))
//   .subscribe(console.log)
