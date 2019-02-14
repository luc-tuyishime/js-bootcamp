const notes = [{},
  {
    title: 'My next trip',
    body: 'I would like to go France'
  },
  {
    title: 'Habbit to work on',
    body: 'Exercice. Eating a bit better'
  },
  {
   title: 'Office modification',
   body: 'Get a new seat'
  }
]

const sortNotes = (notes) => {
 notes.sort((a, b) => {
   if (a.title < b.title) {
     return -1
   }else if(b.title < a.title) {
     return 1
   } else {
     return 0
   }
 })
}

sortNotes(notes)
console.log(notes)

// const findNotes = (notes, query) => {
//   return notes.filter((note, index) => {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//     return isTitleMatch || isBodyMatch
//   })
// }
//
// console.log(findNotes(notes, 'work'))

// console.log(filteredNotes)

const findNote = (notes, noteTitle) => {
  return notes.find((note, index) => {
    return note.title === noteTitle
  })
}

// const findNote = (notes, noteTitle) => {
//   const index = notes.findIndex((note, index) => {
//     return note.title === noteTitle
//   })
//   return notes[index]
// }

// const note = findNote(notes, 'Office modification')
// console.log(note)

// console.log(notes.length)
// console.log(notes.indexOf('notes 2'))
//
// const index = notes.findIndex((note, index) => { // with findIndex you go in array and find index
//   console.log(note)
//   return note.title === 'Habbit to work on'
// })
// console.log(index)

//  console.log(notes.pop())
//  notes.push('New note')
//  console.log(notes.shift())
//  console.log(notes.unshift('My first note'))
//
//  notes.splice(1, 0, 'This is the second item') // add item to the list on the second list(1) or do (1, 1) to remove and replace with new string
//
// // Using forEach
// notes.forEach((item, index) => {
// console.log(index)
// console.log(item)
// })
//
// notes[2] = 'This is now the new note 3'
// console.log(notes)
//
// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

// // Using for Loop
// for( count = 0; count < notes.length; count ++){
//   console.log(notes[count])
// }
