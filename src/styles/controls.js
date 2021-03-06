import styled from 'styled-components';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

export const ControlsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 85%;
  margin: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FilterByNameInput = styled(Input)`
  border: none;
  color: #fff;
  background-color: #242424;
  border-bottom: 4px solid #fff;
  border-radius: 5px 5px 0 0;
  width: 350px;
  height: 50px;
  text-align: center;
  font-size: 16px;

  &:focus {
    border-bottom: 4px solid #f2ce1b;
  }
`;

export const FilterByComparisonDropdown = styled(Dropdown)`
  border: none;
  color: #fff;
  background-color: #242424;
  border-bottom: 4px solid #fff;
  border-radius: 5px 5px 0 0;
  padding: 8px;
  height: 40px;
  text-align: center;

  &:focus {
    border-bottom: 4px solid #f2ce1b;
  }
`;

export const FilterByComparisonInput = styled(Input)`
  border: none;
  color: #fff;
  background-color: #242424;
  border-bottom: 4px solid #fff;
  border-radius: 5px 5px 0 0;
  padding: 8px;
  width: 60px;
  text-align: center;
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
  color: #fff;
  cursor: pointer;
  width: 350px;
  height: 40px;
  background-color: transparent;
  font-size: 15px;
  transition: 0.5s ease-out;
  margin-top: ${(props) =>
    props.testId === 'button-remove-filters' ? '30px' : '0px'};

  &:hover {
    background-color: #f2ce1b;
    color: #000;
  }
`;

export const RadioButton = styled(Input)`
  appearance: none;
  color: #f2ce1b;
  width: 1em;
  height: 1em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  box-shadow: 0 0 3px #f2ce1b;
  cursor: pointer;
  margin: 0 10px;

  &:checked {
    background-color: rgba(242, 206, 27);
  }
`;

export const StarWarsImg = styled.img`
  height: 145px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 350px;
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110px;
  margin-top: 20px;
`;
