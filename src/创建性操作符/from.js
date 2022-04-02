import { from } from 'rxjs'

/* 
  参数是任意 实现了迭代器协议||promise||observable 

  字符串也是有迭代器协议的，abcd ==> a,b,c,d

  用于快速创建观察者对象，这玩意会更好用一些，比较灵活
*/
from('abcd').subscribe(console.log)
from([1, 2, 3]).subscribe(console.log)
from(Promise.resolve(1)).subscribe(console.log)
