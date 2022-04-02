import { defer, race } from 'rxjs'

const request = id => {
  return new Promise(r => {
    setTimeout(() => r(id), Math.floor(1000 + Math.random() * 3000))
  })
}

/* 
  相当于 Promise.race 哪个先好订阅哪个
*/
race(
  defer(() => request(1)),
  defer(() => request(2)),
  defer(() => request(3))
).subscribe(console.log)
