import { concat, of, range } from 'rxjs'

const of1$ = of(1, 2)
const range$ = range(3, 3)

/* 
  将多个观察者连成一条线 顺序 执行（队列）
  
  只有当当前订阅的执行完，才会订阅下一个

  用于组合需要循序执行的观察者
*/
concat(of1$, range$).subscribe(console.log)
