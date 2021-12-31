import { useRecoilValue } from "recoil";
import { todoListState } from "./status/TodoListState";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoType } from "./types/TodoType";

export function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem: TodoType) => {
        <TodoItem key={todoItem.id} item={todoItem}/>
      })}
    </>
  )
}