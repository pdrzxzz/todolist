const input = document.getElementById('todoinput') as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLButtonElement;
const form = document.querySelector('form')!;
const todoList = document.querySelector('ul')!;

interface Todo {
    text: string;
    completed: boolean;
}

//retrive todos from localStorage and return the JSON
function readTodos() : Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if(todosJSON === null) return [];
    return JSON.parse(todosJSON)
}

//save todos on localStorage
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

//define ts array of todos  
const todos: Array<Todo> = readTodos();

//display todos on web
todos.forEach(createTodoElement)

//submit new todo form
form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent page reloading

    if (input.value) {
        const newTodo: Todo = {
            text: input.value,
            completed: false,
        }
        createTodoElement(newTodo)
        todos.push(newTodo)
        saveTodos()

        input.value = '';
    }
})

//logic for creating new todo
function createTodoElement(todo: Todo) {
    const todoLi = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = todo.completed; //retrieve todo checkbox state

    checkBox.addEventListener('change', function(){
        todo.completed = checkBox.checked;
        saveTodos(); //save todo checkbox new state 
    })
    
    todoLi.append(todo.text, checkBox);
    todoList.append(todoLi);
}