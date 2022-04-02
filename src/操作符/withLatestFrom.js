import { interval, of, withLatestFrom } from 'rxjs'

/* 
  在源可观察者发射值动态的给它捆绑点东西，变成一个数组
  相较于 combineLatest 的动态组合这东西感觉会更好控制一些
*/
// 假设 3 秒 一个点击事件
interval(3000)
  .pipe(withLatestFrom(of(2)))
  .subscribe(console.log)
