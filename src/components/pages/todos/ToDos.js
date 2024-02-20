import { TodosQueries } from "../../../api/v1/todos";
import { TodosMutations } from "../../../api/v1/todos";
import ToDoItem from "../../common/templates/todo-item";
import styles from "./ToDos.module.css";
import { useState, useEffect } from "react";

function ToDoPage() {
  //Da wir die Werte erst aus der API mit einem HTTP GET holen müssen,
  //nutzen wir die States von React aus, die bei Veränderung ein
  //neurendern der Komponente triggern
  //Antwort ist da? => lad die Komponente einmal mit Daten gefüllt neu
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    try {
      console.log("Hello world 1 von fetchTodos");

      const jsonResponse = await TodosQueries.fetchAllTodos();
      console.log("MY JSON RESPONSE", jsonResponse);

      setTodos(jsonResponse);
    } catch (e) {
      console.log("Hello world", e);
    }
  }
  async function updateTodo() {
    try {
      console.log("Hello world 1 von updateTodo");

      const jsonResponse = await TodosMutations.updateTodo();
      console.log("MY JSON RESPONSE", jsonResponse);

      setTodos(jsonResponse);
    } catch (e) {
      console.log("Hello world", e);
    }
  }
  async function deleteTodo() {
    try {
      console.log("Hello world 1 von deleteTodo");

      const jsonResponse = await TodosMutations.deleteTodo();
      console.log("MY JSON RESPONSE", jsonResponse);

      setTodos(jsonResponse);
    } catch (e) {
      console.log("Hello world", e);
    }
  }
  async function createTodo() {
    try {
      console.log("Hello world 1 von deleteTodo");

      const jsonResponse = await TodosMutations.createTodo();
      console.log("MY JSON RESPONSE", jsonResponse);

      setTodos(jsonResponse);
    } catch (e) {
      console.log("Hello world", e);
    }
  }
  async function markTodo() {
    try {
      console.log("Hello world 1 von deleteTodo");

      const jsonResponse = await TodosMutations.markTodo();
      console.log("MY JSON RESPONSE", jsonResponse);

      setTodos(jsonResponse);
    } catch (e) {
      console.log("Hello world", e);
    }
  }
  // Alternative Funktion für den API Aufruf
  // Achtung: Wird nicht verwendet
  function alternativeFetchTodos() {
    fetch("http://localhost:3030/v1/todos/all")
      .then((response) => {
        console.log("Hello world 2 von alternativeFetchTodos");
        console.log("Das ist meine rohe Antwort", response);
        return response.json();
      })
      .then((todosJson) => {
        console.log("Hello world 3 von alternativeFetchTodos");
        // setTodos(todosJson);
      });

    console.log("Hello world 1 von alternativeFetchTodos");
  }

  // useEffect
  useEffect(() => {
    fetchTodos();
    updateTodo();
    deleteTodo();
    markTodo();
    createTodo();
  }, []);

  //###Ergänzung zum Code vom Unterricht:###
  //Wenn todos noch leer ist, gib leeren Container aus
  if (todos.length == 0) {
    return <div className={styles.mainContainer}></div>;
  }

  //wenn wir die Daten in todos drin haben (durch den fetch)
  //können wir auch todos, sowie dessen Inhalte in Probs weitergeben
  //hier: "todo={todos[1]}" gibt das 2. todo weiter.
  return (
    <div className={styles.mainContainer}>
      <ToDoItem todo={todos[0]}></ToDoItem>
      <ToDoItem todo={todos[1]}></ToDoItem>
    </div>
  );
}

export default ToDoPage;