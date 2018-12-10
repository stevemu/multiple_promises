const fetch = require('node-fetch'); // fetch polyfill in node.js; not required in front end situation
const _ = require("lodash");

const getTodos = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => {
                if (_.isEmpty(json)) {
                    resolve(`ID ${id} was empty`);
                } else {
                    resolve(json);
                }
            })
    })
};

const createTodosArr = async (todosArr) => {
    let todos = [];
    for (i = 0; i < todosArr.length; i++) {
        let todoObj = await getTodos(todosArr[i]);
        todos.push(todoObj);
    }
    return todos;
};


createTodosArr([1, "A", 3, "B"])
    .then(todos => console.log(todos))
    .catch(e => console.log(e));