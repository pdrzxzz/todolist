const input = document.getElementById('todoinput') as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLButtonElement;
const form = document.querySelector('form')!;
const todoList = document.querySelector('ul')

interface Todo {
    text: string;
    completed: boolean;
}
const todos: Array<Todo> = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        const newTodo: Todo = {
            text: input.value,
            completed: false,
        }
        todos.push(newTodo)
        createTodoElement(newTodo)

        input.value = '';
    }
})

function createTodoElement(todo: Todo) {
    const todoLi = document.createElement('li');
    const todoCheckbox = document.createElement('input')
    todoCheckbox.type = 'checkbox'
    todoLi.append(todo.text, todoCheckbox);
    todoList?.append(todoLi);
}