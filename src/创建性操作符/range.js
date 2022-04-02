import { range } from 'rxjs'

/* 
  从 第一个参数 开始，持续发射 第二个参数 次数个值
  用于快速创建发射 n 次的观察者
*/
range(100, 5).subscribe(console.log)
