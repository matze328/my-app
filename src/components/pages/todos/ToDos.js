import { useEffect, useState } from "react";
import styles from "./ToDos.module.css" 


function ToDos() {
    const [todos, setTodos] = useState([]);

    fetch("http://localhost:3030/v1/todos/alltodos")
        .then(response => response.json())
        .then(json => setTodos(json));

    return ( <div className={styles.mainContainer}>
        "Das ist meine ToDos Site" 
        <ToDoItem></ToDoItem>
        <ToDoItem></ToDoItem>
        </div>
    )
}

export default ToDos;