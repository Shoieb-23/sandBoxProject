import ReactDOM from "react-dom";
import react, { useState } from "react";

export default function Done(props) {
  const [text, setText] = useState(false);

  return (
    <div>
      <button className="complete">Done</button>
    </div>
  );
}
