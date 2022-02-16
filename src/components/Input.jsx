import React from "react";

function Input() {

    function handleClickAdd() {
        console.log('Click add')
    }

  return (
    <div>
      <input type="text" placeholder="to-do" />
      <button
        onClick={handleClickAdd}
      >
        Add to-do
      </button>
    </div>
  );
}

export default Input;
