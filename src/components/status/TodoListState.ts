import { atom } from "recoil";
import { TodoType } from "../types/TodoType";

export const todoListState = atom<TodoType[]|never[]>({
  key: 'todoListState',
  default: [],
});