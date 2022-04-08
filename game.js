let userInput = prompt("What would you like to do?");

const todos = [];

while (userInput !== 'quit') {
    //first conditional  is going to be for "new"
    if (userInput === 'new') {
        let userTodo = prompt("Please enter a new todo")
        console.log(`${userTodo} was added to your list`)
        todos.push(userTodo);
    } else if (userInput === 'list') {
        console.log('********');
        //since 'list' will iterate over an array and I need the index value, I will use a for loop
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('********');
    } else if (userInput === 'delete') {
        let userDelete = prompt('What is the index of the todo you want to delete?');
        console.log(`"${todos[userDelete]}" was deleted from your list`);
        todos.splice(userDelete, 1);
    }
    userInput = prompt("What else would you like to do?");
}
console.log('Okay, you have quit the app.')