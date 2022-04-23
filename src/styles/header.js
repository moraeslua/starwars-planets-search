import styled from 'styled-components';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const FilterByNameInput = styled(Input)`
  border: none;
  background-color: #242424;
  border-bottom: 4px solid #fff;
  border-radius: 5px 5px 0 0;
  width: 300px;
  height: 45px;
  text-align: center;
  margin: 10px;

  &:focus {
    border-bottom: 4px solid #f2ce1b;
  }
`;

export const FilterByComparisonDropdown = styled(Dropdown)`
  border: none;
  background-color: #242424;
  border-bottom: 4px solid #fff;
  border-radius: 5px 5px 0 0;
  padding: 8px;
  height: 40px;
  text-align: center;
  margin: 10px;

  &:focus {
    border-bottom: 4px solid #f2ce1b;
  }
`;

export const FilterByComparisonInput = styled(Input)`
  border: none;
  background-color: #242424;
  border-bottom: 4px solid #fff;
  border-radius: 5px 5px 0 0;
  padding: 8px;
  width: 30%;
  text-align: center;
  margin: 10px;
  -webkit-appearance: none;

  &:focus {
    border-bottom: 4px solid #f2ce1b;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & {
    -moz-appearance: textfield;
  }
`;

export const FiltersButton = styled(Button)`
  border: 1.5px solid #f2ce1b;
  cursor: pointer;
  width: 300px;
  height: 45px;
  background-color: transparent;
  margin: 10px;
  font-size: 15px;
  transition: 0.5s ease-out;

  &:hover {
    background-color: #f2ce1b;
    color: #000;
  }
`;

export const RadioButton = styled(Input)`
  appearance: none;
  color: #f2ce1b;
  margin: 1em 1em 0 0;
  width: 1em;
  height: 1em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  box-shadow: 0 0 3px #f2ce1b;
  cursor: pointer;

  &:checked {
    background-color: rgba(242, 206, 27);
  }
`;

export const StarWars = styled.img`
  width: 220px;
  height: 150px;
`;
