const notes = [
  {
    title: 'my next trip',
    body: 'I would like to go to spain'
  },
  {
    title: 'Movie cinema',
    body: 'watch black panther'
  },
  {
    title: 'Champions league',
    body: 'Juventus is playing tomorrow'
  }
]

document.querySelector('button').addEventListener('click', (e) => {
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#create-note').addEventListener('click', (e) => {
  e.target.textContent = 'the button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', () => {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  console.log(e.target.value)
})
