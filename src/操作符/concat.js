import chalk from 'chalk'
import {
  interval,
  map,
  take,
  concatAll,
  of,
  concatMap,
  concatWith,
  defer,
  tap
} from 'rxjs'

/*
  concatAll，可以把多个可观察者拉平，并且顺序订阅他们

  拉平的意思是，比如一个流之中又产生了1个或多个可观察者，那么这就相当于是两条线，外和里
  这时订阅后收到的结果不是里边，可观察者发射的值，而是它们的引用本身，可以看看下边这个例子
  concatAll 就可以把里边的拉到外边逐个订阅他们，这时外边就变得能订阅里边的了 记住是顺序的

  场景就是把嵌套的拉平，方便组合
  并发相关的是 mergeXX 系列的
*/
of(1, 2, 3)
  .pipe(
    map(v => of(v)),
    concatAll() //可以注释看看结果是什么
  )
  .subscribe(console.log)

/* 
  这里是想展现一个问题，因为所有 concat 系列都是逐个进行订阅的，像队列一样的东西
  所以如果上游发射速度快过了，内部的消化速度，那么为了实现逐个订阅，内部就会无限的缓存上游的值导致内存出问题
*/
interval(500)
  .pipe(
    take(5),
    tap(console.log),
    map(v =>
      defer(() => {
        return new Promise(resolve => {
          setTimeout(() => resolve(v), 1000)
        })
      })
    ),
    concatAll()
  )
  .subscribe(v => console.log(chalk.red(v)))

/* 
    concatMap，相当于 map + concatAll 两个合并了，简写模式
*/
of(1, 2, 3)
  .pipe(concatMap(v => of(v)))
  .subscribe(console.log)

// /*
//   相当于创建型操作符的 concat，效果一样，使用阶段不同而已
// */
of(1, 2, 3)
  .pipe(concatWith(of('A', 'b', 'c')))
  .subscribe(console.log)
