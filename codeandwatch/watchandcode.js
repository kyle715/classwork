 var Todos = ['item 1', 'item 2', 'item 3']
 console.log("My Todos:", Todos)

function addtodo(todo) {
 Todos.push(todo);
 console.log(Todos);
}
addtodo('hello there')

function changeTodo(position, newValue){
 Todos[position] = 'newValue';
 console.log(Todos);
}
changeTodo(0, 'changed')

function deleteTodo(position){
 Todos.splice(position, 1)
 console.log(Todos)
}
deleteTodo(0)

