import { useRecoilValue } from "recoil";
import { TodoItem } from "./todoItem";
import { TodoItemCreator } from "./todoItemCreator";
import { TodoListFilters } from "./todoListFilters";
import { TodoListStats } from "./todoListStats";
import { filteredTodoListState } from "./todo";
import styled from "styled-components";
const TodoListEle = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: #ffe1ee;
`;
export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <TodoListEle id="todoList">
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => {
        console.log(todoItem);
        return <TodoItem item={todoItem} key={todoItem.id} />;
      })}
      <TodoListStats />
    </TodoListEle>
  );
}
