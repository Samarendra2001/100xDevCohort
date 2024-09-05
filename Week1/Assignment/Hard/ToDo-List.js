/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo{
    constructor(){
        this.todos = [];
    }
    add(todo){
        this.todos.push(todo)
    }
     // Remove method that handles both index or item input
     remove(todo) {
        if (typeof todo === 'number') {
            // If todo is a number, treat it as an index and remove by index
            if (todo < 0 || todo >= this.todos.length) {
                console.log('Invalid index');
                return;
            }
            this.todos.splice(todo, 1);
        } else {
            // If todo is not a number, treat it as an item and remove the item
            for (let i = 0; i < this.todos.length; i++) {
                if (Array.isArray(this.todos[i])) {
                    const indexInArray = this.todos[i].indexOf(todo);
                    if (indexInArray !== -1) {
                        this.todos[i].splice(indexInArray, 1); // Remove item from array
                        if (this.todos[i].length === 0) {
                            this.todos.splice(i, 1); // Remove the array if empty
                        }
                        return;
                    }
                } else if (this.todos[i] === todo) {
                    this.todos.splice(i, 1); // Remove the single todo item
                    return;
                }
            }
            console.log('Todo item not found');
        }
    }
      update(index, updatedTodo) {
        if(index < 0 || index >= this.todos.length){
          // throw new Error('Invalid index');
          return
        }
        this.todos[index] = updatedTodo;
      }
  
      getAll() {
        return this.todos;
      }
  
      get(indexOfTodo) {
        if(indexOfTodo < 0 || indexOfTodo >= this.todos.length){
          // throw new Error('Invalid index');
          return null;
        }
        return this.todos[indexOfTodo];
      }
  
      clear() {
        this.todos = [];
      }
}

const TodoList = new Todo();
TodoList.add('gym');
TodoList.add('study');
TodoList.add('Lunch');
TodoList.add('Playing');
TodoList.add('Dinner');

console.log(TodoList.getAll());  // Outputs the entire todo list

TodoList.remove('Lunch');  // Removes 'study'
console.log(TodoList.getAll());  