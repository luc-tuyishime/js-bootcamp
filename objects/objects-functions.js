let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 360
}

let otherBook = {
  title: 'A People History',
  author: 'braneck',
  pageCount: 555
}

// pass objects in function with book
let getSummary = (book) => {
return {
  summary: `${book.title} by ${book.author}`,
  pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

// get object from function
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

console.log('\n')

// Challenge area
// Create function - take fahrenheit in - return object with all three

let convertFahrenheit = (fahrenheit) => {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * 5 / 9,
    celcius: (fahrenheit - 32) * 5 / 9
  }
}

let temp = convertFahrenheit(74)
console.log(temp)

console.log('\n')

// Challenge area
// Create function - take num in - return object with sum and multiplication

let calculation = (num) => {
  return {
    num: num,
    sum: num + num,
    multiply: num * num
  }
}

let result = calculation(5)
console.log(result)
