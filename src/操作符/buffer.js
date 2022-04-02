import {
  buffer,
  bufferCount,
  bufferTime,
  bufferToggle,
  bufferWhen,
  interval,
  take,
  timer
} from 'rxjs'

/* 
  buffer 
  接收一个可观察者，已发射的值会在内部进行缓存
  每当可观察者发射，缓存的值会压缩成数组一并发出
  如果一直没有发射，并且当前可观察者提前结束了，那么内部缓存的值会一并发射出来
*/
const trigger = timer(2000)
interval(500).pipe(take(10), buffer(trigger)).subscribe(console.log)

/* 
  bufferCount( bufferSize: number, gapSize: number ) 
  内部缓存 bufferSize 个值，每次间隔 gapSize 个触发一次订阅
*/
interval(500).pipe(take(10), bufferCount(3, 2)).subscribe(console.log)

/* 
  bufferTime 参数时间内的值会被缓存，计时结束发布订阅
*/
interval(490).pipe(take(10), bufferTime(1000)).subscribe(console.log)

/* 
  bufferWhen 和when已有，就是参数能传回调了
*/
interval(500)
  .pipe(
    take(10),
    bufferWhen(() => timer(1050))
  )
  .subscribe(console.log)

/* 
  bufferToggle( startObservable, (index: number) => closeObservable )
  缓存从 startObservable 开始，closeObservable结束期间的值，index是当前缓存的计数器，第一次是0
*/
interval(500)
  .pipe(
    take(10),
    bufferToggle(interval(1000), v => {
      console.log(v, '!!')
      return timer(1000)
    })
  )
  .subscribe(console.log)
