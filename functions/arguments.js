// Multiple arguments
let add = (a, b, c) => {
  return a + b + c
}

let result = add(10, 1, 2)
console.log(result)

// Default arguments
const getScoreText = (name = 'anonymous', score = 0) => {
 return `Name: ${name} _ Score: ${score}`
}

let scoreText = getScoreText('luc')
console.log(scoreText)

// Challenge area

let totalTip = (total, tippercent = 0.2) => {
  return total * tippercent
}

let totalValue = totalTip(100, undefined)
console.log(totalValue)
