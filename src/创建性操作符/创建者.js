import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  of,
  ReplaySubject,
  Subject
} from 'rxjs'

// useObservable()
// useSubject()
// useBehaviorSubject()
// useReplaySubject()
useAsyncSubject()

function useObservable() {
  /* 
    可以发送 三种 类型
    .next 正常的值
    .error 异常，出现异常直接结束
    .complete 手动结束

    返回函数会在结束后调用，清除副作用
  */
  const ob = new Observable(ob => {
    const timer = setInterval(() => {
      ob.next('value')
    }, 1000)
    // ob.error('error')
    // ob.complete()

    return () => clearInterval(timer)
  })

  ob.subscribe(console.log)
  setTimeout(() => {
    const subscription = ob.subscribe({
      next: console.log,
      error: console.log,
      complete: () => console.log('done')
    })
    // 取消订阅
    // subscription.unsubscribe()
  }, 100)

  // 取消订阅
  // ob.subscribe()
}

function useSubject() {
  /* 
    subject 既可以订阅可观察者，也可以自己作为发布值的可观察者
    
    手动挡，可以在外部进行通知，是否要发射值了

    没法像多节点那样，上层变化了然后做些什么，然后选择性的通知下边
    想做到节点只能创建多个 subject 自己手动调
  */
  const subject = new Subject()
  subject.subscribe(console.log)
  subject.subscribe(console.log)

  of(1, 2).subscribe(subject)
  subject.next(333)
}

function useBehaviorSubject() {
  /* 
    和 subject 唯一区别在于，这东西会缓存最后一次的值
  */
  const subject = new BehaviorSubject('init value')
  subject.subscribe({
    next: v => console.log('observerA: ' + v)
  })

  subject.next(1)
  subject.next(2)

  subject.subscribe({
    next: v => console.log('observerB: ' + v)
  })

  subject.next(3)
}

function useReplaySubject() {
  /* 
    参数
      1. 缓存几次
      2. 与上次值间隔多少 毫秒 才会进缓存

    和 subject 唯一区别在于，这东西会缓存最后 参数 次的值
    和 BehaviorSubject 的主要区别在于，缓存的次数变了
  */
  const subject = new ReplaySubject(3) // 为新的订阅者缓冲3个值
  subject.subscribe({
    next: v => console.log('observerA: ' + v)
  })

  subject.next(1)
  subject.next(2)
  subject.next(3)
  subject.next(4)
  subject.subscribe({
    next: v => console.log('observerB: ' + v)
  })
}

function useAsyncSubject() {
  /* 
    只有当 subject 完成时才会发射最后一次的值
    说实话作为一个可观察者来说不知道有什么用，可能就是一个不会回应的垃圾桶吧
  */
  const subject = new AsyncSubject()
  subject.subscribe({
    next: v => console.log('observerA: ' + v)
  })

  subject.next(1)
  subject.next(2)
  subject.next(3)
  subject.next(4)

  subject.subscribe({
    next: v => console.log('observerB: ' + v)
  })

  subject.next(5)
  subject.complete()
}
