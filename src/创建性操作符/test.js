import { interval, of, zip } from 'rxjs'

function fn() {
  return (...props) => {
    console.log(props)
  }
}

of(1).pipe(fn()).subscribe(console.log)
