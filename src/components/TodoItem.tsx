import React, { ChangeEventHandler, FC } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./status/TodoListState";
import { TodoType } from "./types/TodoType";

export function TodoItem({item}) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });

    setTodoList(newList);
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input 
        type="checkbox" 
        checked={item.isComplete} 
        onChange={toggleItemCompletion} 
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}
function replaceItemAtIndex(arr: TodoType[] | never[], index: number, newValue: TodoType) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TodoType[] | never[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

