import { timer } from 'rxjs'

/* 
  延时多少毫秒发射，就是 setTimeout
  用于快速创建
*/
timer(1000).subscribe(console.log)
