import { atom, useRecoilValue } from "recoil";
import TodoItemCreator from "./todoItemCreator";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

function TodoItem() {
  return <div></div>;
}
