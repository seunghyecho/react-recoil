import { atom, selector } from "recoil";
import { TextInput } from "./textInput";
import { Count } from "./count";

//text 상태관리
const textState = atom({
  key: "textState",
  default: "",
});
//count 상태관리
const countState = selector({
  key: "countState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export default function CharacterCounter() {
  return (
    <>
      <TextInput textState={textState} />
      <Count countState={countState} />
    </>
  );
}
