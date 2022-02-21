import React from "react";
import ToDo from "./ToDo";

function List(props) {
  return (
    <section>
      {props.toDos.map((toDo) => {
        return (
          <ToDo
            key={toDo.title}
            data={toDo}
            isDone={props.isDone}
            removeToDo={props.removeToDo}
            finishToDo={props.finishToDo}
          />
        );
      })}
    </section>
  );
}

export default List;
