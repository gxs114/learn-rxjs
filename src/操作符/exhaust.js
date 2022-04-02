import { exhaustAll, exhaustMap, interval, map, take } from 'rxjs'

/* 
  exhaustXX 和 switchXX 是完全反着来的
  switch 在多次订阅中永远选择“新”的去订阅，然后取消老的订阅
  exhaust在多次订阅中永远选择“旧”的直到结束，然后在订阅新的

  两者感觉就是 对于rxjs的可观察者 现成的节流防抖
*/
interval(2000)
  .pipe(
    map(() => interval(500).pipe(take(5))),
    exhaustAll()
  )
  .subscribe(console.log)

/* 
  exhaustAll + map 的结合体
*/
interval(2000)
  .pipe(exhaustMap(() => interval(500).pipe(take(5))))
  .subscribe(console.log)
