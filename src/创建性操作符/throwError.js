import { throwError } from 'rxjs'

/* 
  永远返回一个错误值，只会发射一次
  用于快速创建
*/
throwError(1).subscribe({ error: console.log })
throwError(() => 2).subscribe({ error: console.log })
throwError(() => {
  throw 3
}).subscribe({ error: console.log })
