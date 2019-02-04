let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 360
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area
// name, age, location
// luc is 24 and lives in kigali
// Increase age by one and print the message

let Person = {
  name: 'tuyishime',
  age: 24,
  location: 'kigali'
}

console.log(`${Person.name} is ${Person.age} and lives in ${Person.location}`)

Person.age += 1 

console.log(`${Person.name} is ${Person.age} and lives in ${Person.location}`)
