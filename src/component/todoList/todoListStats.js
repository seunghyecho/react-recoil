import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./todo";
import styled from "styled-components";
const UlEle = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`;
const LiEle = styled.li`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  min-width: 100px;
  height: 40px;
  text-transform: uppercase;
  color: palevioletred;
  font-size: 12px;
  border-radius: 30px;
  box-shadow: 0px 2px 5px 2px rgb(0 0 0 / 10%);
`;

export function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <UlEle>
      <LiEle>{totalNum} Tasks</LiEle>
      <LiEle>{totalCompletedNum} Completed</LiEle>
      <LiEle>{totalUncompletedNum} Not Completed</LiEle>
      <LiEle>{formattedPercentCompleted} Percent</LiEle>
    </UlEle>
  );
}
