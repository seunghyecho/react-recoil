import { useRecoilState } from "recoil";
export function TextInput({ textState }) {
  const [state, setState] = useRecoilState(textState);
  const onChange = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <input type="text" value={state} onChange={onChange} />
      <p>echo:{state}</p>
    </>
  );
}
