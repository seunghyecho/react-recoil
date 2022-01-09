import { RecoilRoot } from "recoil";
import TodoList from "./component/todoList/todoList";
function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
