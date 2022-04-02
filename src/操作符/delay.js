import { delay, delayWhen, of, timer } from 'rxjs'

/* 
  延迟发射，内部计时器结束时发射

  delay 参数是个时间
  delayWhen 参数是返回新观察者的回调，当观察者发射值就是一个计时
  
  就是用来做延时的
*/

of(1).pipe(delay(1000)).subscribe(console.log)
of(1)
  .pipe(delayWhen(() => timer(2000)))
  .subscribe(console.log)
