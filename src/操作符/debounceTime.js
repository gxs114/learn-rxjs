import { debounce, debounceTime, range, timer } from 'rxjs'

/* 
  防抖
    debounceTime debounce
    内部会开个定时器，每次上游发射值都会重新计时，只有当计时期间没有新值发射时
    才会真正向下发射上游的值

    debounceTime( time: number ) 
      参数是数字，忽略多长时间的值

    debounce( fn: (value)=>Observable ) 
      参数是一个，接收上层值然后返回一个观察者的函数
      意思是只有当返回的观察者发射值了，就相当于一次计时器的完成
      因为参数是函数，所以可以动态调整计时器的持续时间

    相似的有
      防抖？节流？ auditTime audit
      节流 throttleTime throttle
*/

range(0, 25).pipe(debounceTime(1000)).subscribe(console.log)
range(0, 25)
  .pipe(debounce(() => timer(1000)))
  .subscribe(console.log)
