const todos = ['drink', 'pray', 'read', 'dance', 'teach']
// console.log(`You have ${todos.length} todos`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 1]}`) // Get the last item

console.log(todos);
todos.splice(2, 1); // Go to the third item and remove it
console.log(todos);

todos.splice(4, 0, 'the new item is added') // Go to the last item and change the property
console.log(todos)
todos.shift(0) // Remove the first item
console.log(todos)
