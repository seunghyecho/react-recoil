import { useRecoilValue } from "recoil";
export function Count({ countState }) {
  const count = useRecoilValue(countState);

  return <p>Character Count: {count}</p>;
}
