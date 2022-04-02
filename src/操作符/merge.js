import chalk from 'chalk'
import { defer, from, map, mergeAll, mergeMap, of, mergeWith } from 'rxjs'

const request = id => {
  return new Promise(r =>
    setTimeout(() => r(id), Math.floor(1000 + Math.random() * 2000))
  )
}

/* 
  mergeAll，可以把多个可观察者拉平，并且全部订阅他们，也就是并发

  拉平的意思是，比如一个流之中又产生了1个或多个可观察者，那么这就相当于是两条线，外和里
  这时订阅后收到的结果不是里边，可观察者发射的值，而是它们的引用本身
  为了方便操作就需要打平，这样外边就能直接订阅里边的值了

  参数是数字时，表示并发几个
  参数空着是时，有几个来几个

  场景方便组合，并发请求
*/
of(1, 2, 3, 4, 5)
  .pipe(
    map(v => defer(() => request(v))),
    mergeAll()
  )
  .subscribe(console.log)
of(1, 2, 3, 4, 5)
  .pipe(
    map(v => defer(() => request(v))),
    mergeAll()
  )
  .subscribe(console.log)

/* 
  mergeMap 相当于 map + mergeAll

  参数 1 是 map
  参数 2 是 并发数
*/
of(1, 2, 3, 4, 5)
  .pipe(mergeMap(v => defer(() => request(v))))
  .subscribe(console.log)
of(1, 2, 3, 4, 5)
  .pipe(mergeMap(v => defer(() => request(v)), 2))
  .subscribe(console.log)

/* 
  mergeWith 等同于创建型操作符的 merge，和同为操作符的 merge 功能相同
*/
from(request(1))
  .pipe(mergeWith(request(2), request(3)))
  .subscribe(console.log)
