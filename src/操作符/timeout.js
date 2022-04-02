import { of, timer, throwError, interval } from 'rxjs'
import { catchError, map, timeout, delay } from 'rxjs/operators'

/* 
  用于超时报错

  参数可以直接是个数字，多少毫秒后超时
  参数可以是对象
    with 指定如何抛出错误
    first 用于检测“第一个”值是否超时
    each  用于检测除了第一个值之后是否超时
  PS：除非想手动指定错误还是不要用对象了，因为一旦抛出错误就直接停止了，就没什么后续的123了，除了特殊情况不然
*/

interval(2000)
  .pipe(
    timeout(1000),
    catchError(() => of('timeout'))
  )
  .subscribe(console.log)

timer(5000)
  .pipe(
    timeout({
      each: 1000,
      with: () => throwError('error')
    })
  )
  .subscribe({
    error: console.error
  })

const slow$ = interval(1000).pipe(map(v => 'slow'))
const fast$ = interval(500).pipe(map(v => 'fast'))
slow$
  .pipe(
    timeout({
      each: 1000,
      with: () => fast$
    })
  )
  .subscribe(console.log)

// 模拟请求
function makeRequest(timeToDelay) {
  return of('Request Complete!').pipe(delay(timeToDelay))
}
