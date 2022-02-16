import React from "react";

function Input() {


  return (
    <div>
      <input type="text" placeholder="to-do" />
      <button
        onClick={() => {
          console.log('click');
        }}
      >
        Add to-do
      </button>
    </div>
  );
}

export default Input;
