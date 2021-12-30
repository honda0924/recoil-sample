import { useRecoilValue } from "recoil";
import { charCountState } from "./status/CharCountState";

export function CharacterCount():JSX.Element {
  const count = useRecoilValue(charCountState);
  return (
    <>
      Character Count: { count }
    </>
  )

}