// function = input, code, output
let greetUser = () => {
  console.log('welcome user!');
};

greetUser();

let square = (num) => {
  let result = num * num
  return result
};

let value = square(3)
console.log(value)

let convertFahrenheitToCelsius = (fahrenheit) => {
  let celcius = (fahrenheit - 32) * 5 / 9
  return celcius
}

let temp = convertFahrenheitToCelsius(68)
console.log(temp)
