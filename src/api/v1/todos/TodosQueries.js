import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/alltodos");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byid", { params: { todoId } });

  const todo = result.data.todo;

  return todo;
}
async function fetchTodoByUserId(userId) {
  const result = await api.get("/todos/byuserid", { params: { userId } });

  const todo = result.data.todo;

  return todo;
}
export default { fetchAllTodos, fetchTodoById,fetchTodoByUserId };