import { map, of } from 'rxjs'

// 很简单，就是用来吧上游的值加工下，然后作为新值继续
of(1, 2)
  .pipe(map(v => v * 10))
  .subscribe(console.log)
