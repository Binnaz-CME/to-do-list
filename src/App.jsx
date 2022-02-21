import React, { useState } from "react";
import List from "./components/List";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [isDone, setIsDone] = useState(false);

  function addToDo(title) {
    setToDos((prevToDos) => {
      return [...prevToDos, { title: title }];
    });
  }

  function removeToDo(title) {
    const newToDos = [...toDos].filter((toDo) => toDo.title !== title);
    setToDos(newToDos);
  }

  function finishToDo(title) {
    const { title: doneToDo} = [...toDos].find(toDo => toDo.title === title);
    if (doneToDo) {
      setIsDone(!isDone);
    }
  }

  return (
    <main className="App">
      <h1 className='title'>My To-Do List</h1>
      <Input addToDo={addToDo} />
      <List
        toDos={toDos}
        isDone={isDone}
        removeToDo={removeToDo}
        finishToDo={finishToDo}
      />
    </main>
  );
}

export default App;
