import React from "react";

function ListItem(props) {
  return (
    <li>
      {props.text}
      <button>
        <span
          className="remove"
          onClick={() => {
            props.onDone(props.id);
          }}
        >
          Remove
        </span>
      </button>
    </li>
  );
}
export default ListItem;
