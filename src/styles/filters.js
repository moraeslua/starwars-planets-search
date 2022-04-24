import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin: 10px;
  display: flex;
`;

export const DeleteFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2ce1b;
  width: fit-content;
  padding: 13px;
  cursor: pointer;
  border-radius: 10px 0 0 10px;
  transition: ease-out 0.2s;
  border: 1.5px solid #f2ce1b;
  margin-right: 3px;

  &:hover {
    background-color: transparent;
    color: #f2ce1b;
  }
`;

export const FilterNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2ce1b;
  width: fit-content;
  padding: 13px;
  border-radius: 0 10px 10px 0;
  transition: ease-out 0.2s;
  border: 1.5px solid #f2ce1b;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto 20px auto;
`;
