import api from "../../config/api";

async function createTodo(newTodo) {
  const result = api.post("/todos/create", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}
async function updateTodo(updateTodo) {
    const result = api.put("/todos/update", {
      updateTodo: updateTodo,
    });
  
    const todo = result.data;
  
    return todo;
}
export default { createTodo, updateTodo };