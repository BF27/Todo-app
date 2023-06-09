const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 9000;

const FE_FS_PATH = path.join(__dirname, "../frontend/");
const TODO_FS_PATH = path.join(__dirname, "/src/data/todos.json");

function getMaxId(objects) {
  const array = JSON.parse(objects);
  let maxId = 0;
  for (let i = 0; i < array.length; i++) {
    if (maxId < array[i].id) {
      maxId = array[i].id;
    }
  }
  return Number(maxId);
}

//Convert raw json req to an object
app.use(express.json());

app.use(express.static(FE_FS_PATH));

app.get("/api/todos", (req, res) => {
  res.sendFile(TODO_FS_PATH);
});

// Add todo for todos.json
app.post("/api/todos/", (req, res) => {
  const newId = getMaxId(fs.readFileSync(TODO_FS_PATH)) + 1;
  let todos = JSON.parse(fs.readFileSync(TODO_FS_PATH));
  const data = req.body;
  const title = data.title;
  const newTodo = { id: newId, title: title, isDone: false };

  todos.push(newTodo);
  fs.writeFileSync(TODO_FS_PATH, JSON.stringify(todos));
  res.send(todos);
});

//Delete Todo from todos.json
app.delete("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const todos = JSON.parse(fs.readFileSync(TODO_FS_PATH));
  const newTodos = [];
  todos.forEach((todo) => {
    if (todo.id.toString() !== todoId) {
      newTodos.push(todo);
    }
  });
  fs.writeFileSync(TODO_FS_PATH, JSON.stringify(newTodos));
  res.send(newTodos);
});

app.post("/api/todos/status/:id", (req, res) => {
  const todoId = req.params.id;
  let todos = JSON.parse(fs.readFileSync(TODO_FS_PATH));
  todos = todos.map((todo) => {
    if (todo.id.toString() === todoId) {
      todo.isDone = req.body.isDone;
      return todo;
    }
    return todo;
  });
  fs.writeFileSync(TODO_FS_PATH, JSON.stringify(todos));
  res.send(todos);
});

app.listen(port, () => console.log(`App started on: ${port}`));
