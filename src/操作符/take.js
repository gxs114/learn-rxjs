import {
  interval,
  range,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  timer
} from 'rxjs'

/* 
  保留参数次的值，剩下的全部忽略( 其实是满足要求直接就结束了 )

  take 从头保留几个
  takeLast 从屁股保留几个
  takeWhile 可以传函数了，当返回false时立马结束
  takeUntil 得传可观察者(理解成通知者吧)，在下达通知后立马结束
  
  用来做截断，类似于 slice 取多少值
*/
range(0, 10)
  .pipe(take(1))
  .subscribe({
    next: console.log,
    complete: () => console.log('done')
  })

range(0, 5).pipe(takeLast(1)).subscribe(console.log)
range(0, 5)
  .pipe(takeWhile(v => v < 1))
  .subscribe(console.log)
interval(1000)
  .pipe(takeUntil(timer(2000)))
  .subscribe(console.log)
