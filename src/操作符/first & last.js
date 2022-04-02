import { first, from } from 'rxjs'

/* 
  first 和 last 参数一致，作用相反
  first 只取第一个值然后立即结束
  last 是只取结束前的最后一个值

  参数1 
    是筛选条件，不传就是放弃筛选
    筛选条件可以是回调函数，( value: unknown, index: number )，第一个是上游的值，第二个是计数器
  参数2 是默认值，当没有上游发射值的默认值

  相似的有 find,findIndex 与first作用一样，属于是first的阉割版

  first 可用于 once 类似的只需要触发一次的场景
  last 想不到
*/
from([1, 2, 3]).pipe(first()).subscribe(console.log)
from([1, 2, 3])
  .pipe(first(v => v, 0))
  .subscribe(console.log)
from([1, 2, 3])
  .pipe(first(v => v > 2))
  .subscribe({ next: console.log, complete: () => console.log('done') })
