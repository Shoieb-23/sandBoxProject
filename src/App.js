import "./styles.css";
import react, { useState } from "react";
import ToDo from "./ToDo";

export default function App(props) {
  const [c, setC] = useState(false);
  const [items, setItems] = useState([]);
  const [input, setInput] = useState();
  function mouseOver() {
    setC(true);
  }
  function mouseOut() {
    setC(false);
  }
  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
  }
  function handleClick() {
    setItems((prev) => {
      return [...prev, input];
    });
  }
  function deleteItem(e) {
    setItems((prev) => {
      return prev.filter((items, inde) => {
        return inde != e;
      });
    });
  }

  return (
    <div className="App">
      <h1>to-do list</h1>
      <br />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter List Items"
        name="items"
        onChange={handleChange}
        value={input}
      ></input>

      <button
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={handleClick}
        style={{ backgroundColor: c ? "grey" : "black" }}
      >
        ADD
      </button>
      <ul type="none">
        {items.map((x, ind) => (
          <ToDo todo={x} index={ind} onChecked={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
