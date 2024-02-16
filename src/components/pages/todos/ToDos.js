import ToDoItem from "../../common/templates/todo-item";
import styles from "./ToDos.module.css";
import { useState, useEffect } from "react";

function ToDoPage() {
  //Da wir die Werte erst aus der API mit einem HTTP GET holen müssen,
  //nutzen wir die States von React aus, die bei Veränderung ein
  //neurendern der Komponente triggern
  //Antwort ist da? => lad die Komponente einmal mit Daten gefüllt neu
  const [todos, setTodos] = useState([]);

  //useEffekt hier: damit wir den folgenden Code nur einmal ausführen,
  //obwohl wir mit setTodos den State von todos ändern
  useEffect(() => {
    fetch('http://localhost:3030/v1/todos/alltodos')
      .then((response) => response.json())
      .then((todosJson) => {
        console.log(todosJson);
        setTodos(todosJson);
      }); //setTodos: todos = todosJson
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