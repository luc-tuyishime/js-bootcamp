let name = '  Jean luc Tuyishime  '

// length property
console.log(name.length)

// Convert to Upper case
console.log(name.toUpperCase())

// Include method
let password = 'abc123passwordrewrew'
console.log(password.includes('password'))

// Trim (remove left and right space)
console.log(name.trim())

// isvalid password
let isValidPassword = (password) => {
 return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('wqeqw'))
console.log(isValidPassword('twqertewrtewr'))
console.log(isValidPassword('flashjsdfpassword'))
