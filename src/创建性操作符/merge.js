import { merge, interval, map } from 'rxjs'

/* 
  同时订阅所有参数的观察者，哪个好了就发送哪个
  用于并发
*/
merge(interval(1000).pipe(map(() => 'one')), interval(3000)).subscribe(
  console.log
)
