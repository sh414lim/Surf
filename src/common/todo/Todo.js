import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../../Modules/Store";
import TodoItem from "./TodoItem";

export default function Todo() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />
      {todoList.map((item) => {
        <TodoItem item={todoItem} key={todoItem.id} />;
      })}
    </div>
  );
}
