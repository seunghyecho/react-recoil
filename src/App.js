import { RecoilRoot } from "recoil";
import CharacterCounter from "./component/characterCounter/characterCounter";
function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
