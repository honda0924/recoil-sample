
import { SetStateAction, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./status/TodoListState";
import { TodoType } from "./types/TodoType";

export function TodoItemCreator(){
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  let id = 0;
  function getId(): number {
    return id++;
  }
  const newTodo: TodoType = {
    id:getId(),
    text:inputValue,
    isComplete: false,
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      newTodo
    ]);
    setInputValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input type="text" 
        value={ inputValue } 
        onChange={ onChange }
      />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
