import React from "react";
import { useSetRecoilState } from "recoil";

export default function TodoListCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(setTodoList);

  let id = 0;
  function getId() {
    return id++;
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
