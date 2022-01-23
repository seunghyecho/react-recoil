import { useRecoilState } from "recoil";
import { todoListState } from "./todo";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const TodoItemEle = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;

  box-sizing: border-box;
`;
const Label = styled.label`
  margin-right: 5px;
  width: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: #fff;

  &:hover,
  &:active,
  &:focus {
    ${(props) =>
      props.primary &&
      css`
        background-color: palevioletred;
        color: white;
      `}
  }
`;
const InputTypeText = styled.input`
  margin-right: 10px;
  width: 100%;
  height: 40px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
`;
const InputTypeCheck = styled.input`
  display: none;
  & + label {
    background-color: palevioletred;
    opacity: 0.3;
  }
  &:checked + label {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: palevioletred;
    color: white;
    opacity: 1;
  }
`;

const Button = styled.button`
  width: 10%;
  height: 50px;
  background: transparent;
  border-radius: 20px;
  border: 2px solid palevioletred;
  color: palevioletred;

  &:hover,
  &:active,
  &:focus {
    ${(props) =>
      props.primary &&
      css`
        background-color: palevioletred;
        color: white;
      `}
  }
`;

// TodoItem
export function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <TodoItemEle className="todoItem">
      <InputTypeText type="text" value={item.text} onChange={editItemText} />
      <InputTypeCheck
        id={item.text}
        name={item.text}
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <Label htmlFor={item.text}>
        <FontAwesomeIcon icon={faCheck} />
      </Label>
      <Button onClick={deleteItem}>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </TodoItemEle>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
