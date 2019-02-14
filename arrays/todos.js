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
 // we are Sorting for todos which is not complited
// Sort specify the order we want to Sort things
const sortTodos = () => {
  todos.sort((a, b) => {
    if (a.complited === false && b.complited === true){ // if a is false mean not complited and be true return -1
      return -1
    } else if(b.complited === false && a.complited === true){
      return 1
    } else {
      return 0
    }
  })
}
sortTodos(todos)
console.log(todos)



const removeTodo = (todos, todosText) => {  // todos(look for the list) todosTitle(text to delete)
  return todos.findIndex((todo, index) => {
      return todo.text.toLowerCase() === todosText.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1) //Go to index and remove 1
  }
}
const result = removeTodo(todos, 'drink some wine')
console.log(result)



// Return list that Not complited
const getThingsTodo = (todos) => {
  return todos.filter((todo) => {
    return !todo.complited
  })
}
console.log(getThingsTodo(todos))




// Using for Loop
for(count = 0; count < todos.length; count ++){
 const num = count + 1
 const todo = todos[count]
 console.log(`${num}. ${todo}`)
}







// A callback is a function added to a function
