import { of, skip, skipWhile, skipLast, skipUntil, interval, timer } from 'rxjs'

/* 
  用于跳过

  和 take 是反着来的

  skip 从开始跳几个
  skipLast 从结束跳几个
  skipWhile 可以传条件了
  skipUntil 传一个可观察者，用于做通知，开始前都得跳过
*/
of(1, 2, 3).pipe(skip(2)).subscribe(console.log)
of(1, 2, 3)
  .pipe(skipWhile(v => v < 3))
  .subscribe(console.log)
of(1, 2, 3).pipe(skipLast(2)).subscribe(console.log)
interval(1000)
  .pipe(skipUntil(timer(3000)))
  .subscribe(console.log)
