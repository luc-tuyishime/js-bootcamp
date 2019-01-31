let AccountLocked = false;
let userRole = 'admin';
let temp = 450;

if (AccountLocked) {
    console.log('this account is locked...');
} else if (userRole === 'pierre') {
  console.log('welcome user admin!');
 } else {
   console.log('welcome!');
}

if(temp <= 32) {
  console.log('Go for it, It is pretty nice');
} else if (temp >= 101) {
  console.log('It is hot outside');
} else {
  console.log('It is freezing outside');
}
