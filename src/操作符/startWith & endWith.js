import { endWith, of, startWith } from 'rxjs'

/* 
  用于注入
  startWith 开头注入什么，endWith结尾注入什么
*/
of(1, 2, 3).pipe(startWith('a', 'b'), endWith('n', 'm')).subscribe(console.log)
