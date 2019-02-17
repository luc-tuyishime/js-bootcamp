// student, score, total possible score
// 15/20 => You got a grace C
// A 90-100, B 80-89, C 78-79, D 60-69, F 0-59

const gradeCal = (score, totalScore) => {
  const percent = (score / totalScore) * 100
  let letterGrade = ''
  if (percent >= 90) {
   letterGrade = 'A'
  } else if (percent >= 80) {
    letterGrade = 'B'
  } else if (percent >= 78) {
    letterGrade = 'C'
  } else if (percent >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }

    return `You got a (${letterGrade}) (${percent})!`
}

const result = gradeCal(16, 20)
console.log(result)
