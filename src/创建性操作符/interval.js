import { interval } from 'rxjs'

/* 
  定时多少毫秒发射，就是 setInterval
  用于快速创建
*/
interval(1000).subscribe(console.log)
