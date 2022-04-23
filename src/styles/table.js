import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  height: 80%;
  border-collapse: separate;
`;

export const Thead = styled.thead`
  & > tr > th {
    color: #fff;
    padding: 0.8rem 0rem;
    text-align: center;
    /* border: 3px solid white; */
  }
`;

export const Tbody = styled.tbody`
  & > tr > td {
    color: #999;
    padding: 0.8rem 0rem;
    text-align: center;
  }
`;
