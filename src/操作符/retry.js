import {
  catchError,
  delay,
  interval,
  map,
  of,
  retry,
  take,
  throwError
} from 'rxjs'

/* 
  retry 重启参数次，不写参数就是无限重连
  场景比如接口报错充实
*/
interval(1000)
  .pipe(
    take(10),
    map(v => {
      if (Math.random() > 0.5) {
        return v
      }
      console.log('???')
      throw Error('err')
    }),
    retry(2),
    delay(1000),
    catchError(() => of('err'))
  )
  .subscribe({
    next: console.log,
    error: e => console.log(e)
  })
