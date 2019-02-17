const todos = [
  {
    text: 'Order a cat',
    complited: true
  },
  {
    text: 'Play football',
    complited: false
  },
  {
    text: 'Drink some wine',
    complited: true
   },
  {
    text: 'Go to school everyday',
    complited: true
  },
  {
    text: 'Buy food',
    complited: false
  }
]

// const ps = document.querySelectorAll('p')
// ps.forEach((p) => {
//   if(p.textContent.includes('the')){
//     p.remove()
//   }
// })

const incompleteTodos = todos.filter((todo) => { // filter incomplet Todos
  return !todo.complited
})

const summary = document.createElement('h2')
summary.textContent = `you have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)


todos.forEach((todo) => {
  const p  = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})
