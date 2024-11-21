"use strict";
const input = document.getElementById('todoinput');
const btn = document.getElementById('btn');
const form = document.querySelector('form');
const todoList = document.querySelector('ul');
const todos = [];
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        const newTodo = {
            text: input.value,
            completed: false,
        };
        todos.push(newTodo);
        createTodoElement(newTodo);
        input.value = '';
    }
});
function createTodoElement(todo) {
    const todoLi = document.createElement('li');
    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoLi.append(todo.text, todoCheckbox);
    todoList === null || todoList === void 0 ? void 0 : todoList.append(todoLi);
}
