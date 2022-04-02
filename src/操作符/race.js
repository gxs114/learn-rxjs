import { defer, of, raceWith } from 'rxjs'

const request = id => {
  return new Promise(r => {
    setTimeout(() => r(id), Math.floor(1000 + Math.random() * 3000))
  })
}

/* 
  raceWith 和创造符 race 作用一样，和操作符race作用一样，相当于 Promise.race
*/
defer(() => request(1))
  .pipe(raceWith(request(2), request(3)))
  .subscribe(console.log)
