import React, { useState } from "react";
import InputArea from "./InputArea";
import ListItem from "./ListItem";

function App() {
  const [item, setItem] = useState([]);

  function addItem(inputValue) {
    setItem((prev) => [...prev, inputValue]); //new input added to end of array item
  }
  function deleteItem(id) {
    setItem((prev) => {
      return prev.filter((todo, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClickAdd={addItem} />
      <div>
        <ul>
          {item.map((listItem, index) => (
            <ListItem
              key={index}
              id={index}
              text={listItem}
              onDone={deleteItem}
            /> //passing function deleteItem
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
