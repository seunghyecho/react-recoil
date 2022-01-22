import { useRecoilValue } from "recoil";
import { TodoItem } from "./todoItem";
import { TodoItemCreator } from "./todoItemCreator";
import { TodoListFilters } from "./todoListFilters";
import { TodoListStats } from "./todoListStats";
import { filteredTodoListState } from "./todo";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div id="todoList">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </div>
  );
}
