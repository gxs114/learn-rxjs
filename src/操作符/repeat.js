import { interval, of, repeat, repeatWhen } from 'rxjs'

/* 
  手动控制重启多少次
  repeatWhen 对比 repeat 就是能传函数了
*/
of(1).pipe(repeat(3)).subscribe(console.log)
of(1)
  .pipe(repeatWhen(() => interval(1000)))
  .subscribe(console.log)
