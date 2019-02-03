// undefined for variable

let name

name = 'jen'

if (name === undefined) {
  console.log('please provide a name')
} else {
  console.log(name)
}

// undefined for function arguments
// undefined

let square = (num) => {
  console.log(num)
}

let result = square()
console.log(result)

let age = 27
age = undefined

console.log(age)
