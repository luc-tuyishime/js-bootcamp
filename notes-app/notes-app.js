// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')  // Get all the P
ps.forEach((p) => { // iterate through each
  // p.textContent = '*******'
  // p.remove() // remove on by one
  console.log(p.textContent)
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is the new element from Javascript'
document.querySelector('body').append(newParagraph) 
