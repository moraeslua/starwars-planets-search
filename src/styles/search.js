import styled from 'styled-components';
import Background from '../images/sky-background.jpg';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 0 90px;
`;

export const PageLeftField = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom: 50px;
  margin-top: 150px;
  width: 75%;
  justify-content: flex-start;
`;

export const Card = styled.div`
  --card-border-radius: 8px;
  --card-background-color: rgba(13, 13, 13, 0.8);
  display: flex;
  box-shadow: 4px 4px 10px rgb(0 0 0 / 15%);
  background-color: var(--card-background-color);
  border-radius: var(--card-border-radius);
  overflow-x: scroll;
  width: 100%;
  padding: 20px 30px;
  height: fit-content;

  &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    border-radius: var(--card-border-radius);
    background-color: var(--card-background-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 20px;
    border: 3px solid var(--card-background-color);
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }
`;
