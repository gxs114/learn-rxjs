import { audit, auditTime, interval, map, range, take, timer } from 'rxjs'

/* 
  不知道算 防抖还是节流

  内部有个定时器，定时器计时结束才会发射新值
  auditTime能直接声明延时时间，audit是通过内部返回观察者作为定时器（ 当观察者发射出值了就是一次另类的计时 ）

  常规的节流 throttleTime，throttle
  防抖 debounceTime，debounce

  和常规的区别
    throttleTime 
      1. 计时器是稳定的
      2. 每次有输入“不会”重新计时
      3. 有输入时，“会执行一次才会计时”
      4. 它会忽略计时器期间所有的值，采用的永远是“非计时状态下”的输入值

    debounceTime 
      1. 计时器是移动的
      2. 每次有输入“会”重新计时
      3. 有输入时，“不会立即执行，而是立马开启计时”
      4. 它会忽略计时器期间所有的值，采用的永远是“最后一次计时器”完成后，上游的输入值

    auditTime    
      1. 计时器是稳定的
      2. 每次有输入“不会”重新计时
      3. 有输入时，“不会立即执行，而是立马开启计时”
      4. 它会忽略计时器期间所有的，"除了最后一次"的值，采用的永远是每次计时期间最后一次的值

    比如说没 0.5 秒分别发射 1，2，3 个值，计时器是 1 秒
      throttleTime 只会发射 1，因为发完第一个值开始计时，2,3的发射间隔刚好是1秒，此时没有超过计时的1秒，所以忽略
      debounceTime 只会发射 3，因为每次间隔是0.5秒，计时1秒的话，发射间隔是永远小于计时的，所以1，2创建的计时都被取消了，只有3会保留
      auditTime    只会发射 2,3 因为会立即开始计时，第一秒内最新的是2，第二秒只有一个3
*/

interval(500)
  .pipe(
    map(v => v + 1),
    take(3)
  )
  .pipe(auditTime(1000))
  .subscribe(console.log)
interval(500)
  .pipe(
    map(v => v + 1),
    take(3)
  )
  .pipe(audit(() => timer(10)))
  .subscribe(console.log)
