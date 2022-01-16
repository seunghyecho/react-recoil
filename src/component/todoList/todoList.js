import { atom, useRecoilValue } from "recoil";
import { TodoItemCreator } from "./todoItemCreator";
import { TodoItem } from "./todoItemCreator";
import { TodoListFilters } from "./todoListFilters";
import { TodoListStats } from "./todoListStats";

const filteredTodoListState = atom({
  key: "filteredTodoListState",
  default: [],
});

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </div>
  );
}
