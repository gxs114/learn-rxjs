import { catchError, finalize, of, throwError } from 'rxjs'

// 只有当出现错误或者结束时才会调用
throwError(1)
  .pipe(
    finalize(() => console.log('done')),
    catchError(v => of())
  )
  .subscribe(console.log)
