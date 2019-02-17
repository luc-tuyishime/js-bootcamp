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
// il va generer un nombre random entre 1 et 5 et comparer avec la valeur passer comme argument
let makeGuess = (guess) => {
  let min = 1
  let max = 5
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(randomNumber)
  return guess === randomNumber
}

console.log(makeGuess(1))
