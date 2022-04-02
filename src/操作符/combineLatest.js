import {
  combineLatestAll,
  combineLatestWith,
  defer,
  map,
  of,
  timer
} from 'rxjs'

timer(2000)
  .pipe(combineLatestWith(of('A'), of('B')))
  .subscribe(console.log)

of(1, 2, 3)
  .pipe(
    map(v =>
      defer(() => {
        return new Promise(r => {
          const time = 1000 + Math.random() * 2000
          console.log(time)
          setTimeout(() => r(v), time)
        })
      })
    ),
    combineLatestAll()
  )
  .subscribe(console.log)
