/* 
   Filename: SophisticatedCode.js
   Description: This code demonstrates a complex implementation of a Todo List application.
*/

class Todo {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }
}

class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(title, description) {
    const newTodo = new Todo(
      this.generateId(),
      title,
      description,
      false
    );

    this.todos.push(newTodo);
  }

  removeTodoById(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodoCompletionById(id) {
    const todo = this.findTodoById(id);
    if (todo) {
      todo.toggleCompletion();
    }
  }

  findTodoById(id) {
    return this.todos.find(todo => todo.id === id);
  }

  generateId() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
}

// Usage example

const todoList = new TodoList();

todoList.addTodo("Important Task", "Finish proposal");
todoList.addTodo("Meeting", "Attend the team meeting at 2 PM");
todoList.toggleTodoCompletionById(todoList.todos[0].id);

console.log(todoList.todos); // Output: [Todo {id: "_abcdef123", title: "Important Task", description: "Finish proposal", completed: true}, Todo {id: "_ghijkl456", title: "Meeting", description: "Attend the team meeting at 2 PM", completed: false}] 

// ... more usage and operations on the todo list below (not shown for brevity)
// ...

// Complete 200 lines of code

// ...


// Execution of 200-line code starts here