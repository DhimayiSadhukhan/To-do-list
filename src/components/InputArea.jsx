import React, { useState } from "react";

function InputArea(props) {
  const [inp, setInp] = useState("");
  function handleChange(event) {
    setInp(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inp} />
      <button
        onClick={() => {
          props.onClickAdd(inp);
          setInp("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
