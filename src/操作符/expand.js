import { expand, of, take } from 'rxjs'

/* 
  递归调用
  就是每次发射一个值时，会先给订阅函数，然后在回到 expand 的回到函数中，这样周而复始

  要终止只有主动停止
    take 之类的能帮你停掉的
    手动停止订阅
    返回结束掉的 可观察者，比如EMPTY,of()

  第二个参数是并发个数，源可能会持续发射很多值，控制下最多并行几条
*/
of(1)
  .pipe(
    expand(v => of(v + 1)),
    take(5)
  )
  .subscribe(console.log)

of(1)
  .pipe(
    expand(v => of(v + 1), 2),
    take(5)
  )
  .subscribe(console.log)
