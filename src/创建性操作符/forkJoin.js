import { forkJoin, of, timer } from 'rxjs'

/* 
  可以接收 数组||对象 作为参数，返回也会是同样的类型

  当且仅当全部都完成时发送每个观察者最后的值

  只会触发一次，相当于 Promise.all
*/
// forkJoin([Promise.resolve(1), timer(1000), of(3, 4, 5)]).subscribe(console.log)
forkJoin({ a: Promise.resolve(1), b: of(3, 4, 5), c: timer(2000) }).subscribe(
  console.log
)
