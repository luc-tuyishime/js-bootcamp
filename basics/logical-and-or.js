let temp = 55;
let isGuestOneVegan = true;
let isGuestTwoVegan = true;

// logical and operator - True if both side sides are true. False otherwise
// logical Or operator - True if at least one condition is true

if (temp >= 60 && temp <= 90) {
  console.log('it is pretty nice outside');
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside');
}else {
  console.log('Do what you want');
}

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('only offer us vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('make sure to offer up some vegan options');
} else {
  console.log('offer us anything on the menue');
}
