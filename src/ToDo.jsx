import ReactDOM from "react-dom";
import react, { useState } from "react";

import Done from "./Done";
export default function ToDo(props) {
  const [text, setText] = useState(false);
  function handleChange() {
    setText(true);
  }

  return (
    <div>
      <button
        onClick={() => {
          props.onChecked(props.index);
        }}
        className="complete"
      >
        Delete
      </button>
      <li style={{ textDecoration: text && "line-through" }}>{props.todo}</li>
      <br />

      <button onClick={handleChange} className="complete">
        Done{" "}
      </button>

      <hr />
    </div>
  );
}
