import { selector } from "recoil";
import { textState } from "./TextState";

export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text: string = get(textState);

    return text.length;
  }
})