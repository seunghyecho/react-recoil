import { useState } from "react";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
    console.log(value);
  };
  const addItem = () => {
    setInputValue("");
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
