import styled from 'styled-components';

export const Wrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Excercise = styled.View`
  width: 48%;
  background-color: rgb(82, 212, 154);
  height: 230px;
  border-radius: 10px;
  margin-top: 18px;
  justify-content: space-between;
  padding: 20px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 26px;
`;

export const Toggle = styled.View`
  background-color: #fff;
  border-radius: 32px;
  width: 32px;
  height: 32px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`;
