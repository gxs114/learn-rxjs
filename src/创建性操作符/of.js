import { of } from 'rxjs'

/* 
  会依次发射每个值
  用于快速返回一个新的观察者
*/
of(1, 2, 3).subscribe(console.log)
