import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./todo";
import styled, { css } from "styled-components";

const CreateEle = styled.div`
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputTypeText = styled.input`
  margin-right: 10px;
  padding: 0 20px;
  border: none;
  width: 100%;
  height: 50px;
  outline: none;
  border-radius: 30px;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);

  &:hover,
  &:active,
  &:focus-visible {
    border: none;
  }
`;
const Button = styled.button`
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 30px;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-weight: bold;

  &:hover,
  &:active,
  &:focus {
    ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `}
  }
`;

// TodoItemCreator
export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <CreateEle id="creator">
      <InputTypeText type="text" value={inputValue} onChange={onChange} />
      <Button primary onClick={addItem}>
        Add
      </Button>
    </CreateEle>
  );
}

let id = 0;
function getId() {
  return id++;
}
