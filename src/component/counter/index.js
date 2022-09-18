import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

const countState = atom({
  key: "counter",
  default: 0,
});

const inputState = atom({
  key: "input",
  default: "",
});

const countStateSelector = selector({
  key: "ContState",
  get: ({ get }) => {
    const inputValue = get(inputState);
    const count = get(countState);
    return `추가된 카운트는 ${inputValue}이고, 현재 카운트는 ${count}입니다.`;
  },
});
export function Counter() {
  const [counter, setCounter] = useRecoilState(countState);
  const currentCount = useRecoilValue(countState); //읽기 전용
  const handleCounter = useSetRecoilState(countState); //값만 변경
  const resetCounter = useResetRecoilState(countState); //디폴트 값으로 변경

  const currentInput = useRecoilValue(inputState);
  const handleInputState = useSetRecoilState(inputState);
  const resultValue = useRecoilValue(countStateSelector);

  const increase = () => {
    handleCounter((pre) => pre + 1);
  };
  const decrease = () => {
    handleCounter((pre) => pre - 1);
  };

  const handleInput = (e) => {
    const target = e.target.value;
    handleInputState(target);
  };

  const handleSubmitCount = () =>
    handleCounter((pre) => pre + Number(currentInput));
  return (
    <>
      <div>
        <div>counter: {counter}</div>
        <div>currentCount: {currentCount}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={resetCounter}>reset</button>
      </div>
      <div>
        <input type="text" onChange={handleInput} />
        <button onClick={handleSubmitCount}>입력값 더하기</button>
        <div>{resultValue}</div>
      </div>
    </>
  );
}
