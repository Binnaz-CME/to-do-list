import React from "react";

function List() {
  
  function handleClickFinished() {
    console.log("click finished")
  }

  function handleClickRemove() {
    console.log("click remove")
  }

  return (
    <section>
      <p>Activity</p>
      <button
        onClick={handleClickFinished}
      >
        Mark as finished
      </button>
      <button
        onClick={handleClickRemove}
      >
        Remove
      </button>
    </section>
  );
}

export default List;
