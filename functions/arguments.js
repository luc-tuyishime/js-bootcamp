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

// Challenge area, tip calculation

let totalTip = (total, tippercent = 0.2) => {
  let percent = tippercent * 100
  let tip = total * tippercent
  return `A ${percent}% tip on ${total} would be ${tip}`
}

let totalValue = totalTip(100, undefined)
console.log(totalValue)
