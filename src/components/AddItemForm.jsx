import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    const newText = e.target.value;
    setItemText(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        onChange={handleChange}
        type="text"
        value={itemText}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
