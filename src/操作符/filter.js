import { of } from 'rxjs'
import { filter } from 'rxjs/operators'

/* 
  参数是个函数，返回值会作为布尔进行判断，是否应该继续往下发射上层的值
  用来做筛选的
*/
of(1)
  .pipe(filter(() => false))
  .subscribe(console.log)
of(1)
  .pipe(filter(() => true))
  .subscribe(console.log)
