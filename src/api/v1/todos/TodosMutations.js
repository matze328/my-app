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
async function markTodo(todoId) {
    const result = await api.put("/todos/mark", { params: { todoId } });
  
    const todo = result.data.todo;
  
    return todo;
}
async function deleteTodo(todoId) {
    const result = await api.put("/todos/delete", { params: { todoId } });
  
    const deleteTodo = result.data.todo;
  
    return deleteTodo;
}
export default { createTodo, updateTodo, markTodo, deleteTodo };