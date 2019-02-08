let num = 103.941

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let mathRandom = Math.random()

let min = 10
let max = 20
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)

// challenge

let makeGuess = (guess) => {
  let min = 1
  let max = 5
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  return guess === randomNumber
}

console.log(makeGuess(1))
