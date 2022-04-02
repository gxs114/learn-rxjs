import { throwError, catchError, of } from 'rxjs'

/* 
  用于捕获错误，相当于 Promise.catch，只要正常处理错误就会继续走正常流程
*/
throwError(of('error'))
  .pipe(catchError(e => e))
  .subscribe(console.log)
