import React from "react";
import styles from "./styles/todo.module.css";

function ToDo(props) {

  function handleRemove() {
    const title = props.data.title;
    props.removeToDo(title);
  }

  function handleFinished() {
    const title = props.data.title;
    props.finishToDo(title);
  }

  return (
    <div className={styles.todo}>
      <p className={props.isDone ? styles.lineThrough : null}>{props.data.title}</p>
      <button className={styles.button} onClick={handleFinished}>
        Finished
      </button>
      <button className={styles.button} onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default ToDo;
