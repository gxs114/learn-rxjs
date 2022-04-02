import { defer } from 'rxjs'

const request = () => {
  console.log('我执行了')
  return Promise.resolve(1)
}

/* 
  参数是一个返回新的 观察者，promise 的回调函数
  它只有在被订阅时才会调用回调函数

  能用于 switch 的场景中，因为只有在被订阅时才会调用回调函数创建观察者，
  所以就可以做到根据当时的环境变量来动态的选择返回什么，就比如新的观察者，
  也可以实现 iif 的事情

  在封装请求时用着不错
*/
const ob = defer(request)
setTimeout(() => ob.subscribe(console.log), 1000)
setTimeout(() => ob.subscribe(console.log), 2000)
