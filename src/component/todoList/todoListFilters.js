import { useRecoilState } from "recoil";
import { todoListFilterState } from "./todo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const FilterEle = styled.div`
  margin-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    position: absolute;
    right: 20px;
    width: 20px;
    height: 20px;
  }
`;
const Select = styled.select`
  padding: 5px 20px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: none;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 30px;
`;

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <FilterEle>
      <span>
        <FontAwesomeIcon icon={faCaretDown} />
      </span>
      <Select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </Select>
    </FilterEle>
  );
}
