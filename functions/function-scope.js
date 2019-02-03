// Global scope (convertFahrenheitToCelsius)
// Local Scope (fahrenheit, celcius)
 // Local scope (isFreezing)

let convertFahrenheitToCelsius = (fahrenheit) => {
  let celcius = (fahrenheit - 32) * 5 / 9

  if (celcius <= 0) {
   let isFreezing = true
  }

  return celcius
}

let temp = convertFahrenheitToCelsius(68)
console.log(temp)
