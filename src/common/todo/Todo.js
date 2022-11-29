import React from "react";
import { todoListState } from "../Modules/Store";

export default function Todo() {
  return (
    <div>
      {/* <TodoListCreator/> */}
      {todoListState.map((item) => {
        // <TodoItem/>
      })}
    </div>
  );
}
