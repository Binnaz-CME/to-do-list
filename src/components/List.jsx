import React from "react";
import ToDo from "./ToDo";
import styles from "./styles/todo.module.css";

function List({ isDone, removeToDo, toDos }) {
  return (
    <section>
      {toDos.map((toDo) => {
        return (
          <ToDo
            className={styles.toDo}
            key={toDo.title}
            data={toDo}
            isDone={isDone}
            removeToDo={removeToDo}
            toDos={toDos}
          />
        );
      })}
    </section>
  );
}

export default List;
