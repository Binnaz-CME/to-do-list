import React, { useState } from "react";
import styles from "./styles/todo.module.css";

function ToDo({ data, toDos, removeToDo }) {
  const [isDone, setIsDone] = useState(false);

  function handleRemove() {
    const title = data.title;
    removeToDo(title);
  }

  function handleFinished() {
    const title = data.title;
    finishToDo(title);
  }

  function finishToDo(title) {
    const doneToDo = [...toDos].find(
      (toDo) => toDos.title !== title
    );
    if (doneToDo) {
      setIsDone(!isDone);
    }
  }

  return (
    <div className={styles.todo}>
      <p style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {data.title}
      </p>
      <button className={styles.button} onClick={handleFinished}>
        Done
      </button>
      <button className={styles.button} onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default ToDo;
