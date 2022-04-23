import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  height: 80%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  & > tr > th {
    color: #fff;
    padding: 0.25rem;
    text-align: center;
    /* border: 1px solid #000; */
  }
`;

export const Tbody = styled.tbody`
  & > tr > td {
    color: #999;
    padding: 0.25rem;
    text-align: center;
    /* border: 1px solid #000; */
  }
`;
