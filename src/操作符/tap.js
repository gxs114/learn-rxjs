import { filter, range, tap } from 'rxjs'

// 不会改变任何行为，用来做调试用的，正常js也可以用这种想法来断点调试
// 用来做调试的
range(0, 10)
  .pipe(
    tap(console.log),
    filter(() => false)
  )
  .subscribe(console.log)
