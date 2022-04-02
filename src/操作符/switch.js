import { interval, map, switchAll, switchMap } from 'rxjs'

/* 
  switchAll 可以将嵌套的可观察者打平，打平的意思看 concatAll 或 mergeAll 吧

  作用为，当产生新的可观察者时，旧的会被自动取消订阅
  场景：在实时请求时，如果需要新请求接口，那么自动取消上次的接口请求就会很好用了
*/
interval(2000)
  .pipe(
    map(() => interval(500)),
    switchAll()
  )
  .subscribe(console.log)

/* 
  switchMap 相当于 map + switchAll
*/
interval(2000)
  .pipe(switchMap(() => interval(500)))
  .subscribe(console.log)
