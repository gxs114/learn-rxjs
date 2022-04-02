import { fromEvent } from 'rxjs'

/* 
  相当于 addEventListener and removeEventListener 的结合，第三个参数是传递给addEventListener的第三个参数
  用于绑定DOM事件
*/
fromEvent(document.body, 'click').subscribe(console.log)
