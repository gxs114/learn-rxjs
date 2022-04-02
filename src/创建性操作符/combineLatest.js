import { combineLatest, interval, Observable } from 'rxjs'

const timer1 = interval(500)
const timer3 = interval(3000)

/* 
  会组合所有观察者的值成一个数组

  第一次发射是在所有观察者都发出第一个值之后，因为没有全部都发射的话组不成一个数组
  第一次时等待期间的如果一个发射了，其他迟迟不发射，已发射的缓存新值数量最大是 2 个，超出 2 个的值会抛弃掉

  第一次之后，每次有新的发射都会推送一次新的数据

  根据初次必须全部发射的特性，可以当做是不太保险的 Promise.all 来用, 真正能当 Promise.all 看 forkJoin
*/
combineLatest([timer1, timer3]).subscribe(console.log)
