import styled from 'styled-components';

const greenishTeal = 'rgb(82, 212, 154)';
const white = '#fff';

export const Separate = styled.Text`
  height: 1px;
  width: 100%;
  background-color: #fff;
`;

export const Level = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  flex: 1;
`;

export const Num = styled.Text`
  color: ${props => (props.color ? white : greenishTeal)};
  font-size: 20px;
  width: 65px;
  height: 65px;
  border-radius: 65px;
  background-color: ${props => (props.color ? greenishTeal : white)};
  text-align: center;
  text-align-vertical: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const NumText = styled.Text`
  font-weight: bold;
`;

export const Block = styled.View`
  margin-left: 20px;
  width: 75%;
`;

export const Line = styled.View`
  height: 23px;
  border-radius: 23px;
  width: 100%;
  background-color: #fff;
  margin-top: 15px;
`;

export const InLine = styled.View`
  height: 23px;
  border-radius: 23px;
  width: ${props =>
    props.id === 60
      ? '40%'
      : props.id === 90
        ? '60%'
        : props.id === 120
          ? '80%'
          : '100%'};
  background-color: ${props => (props.color ? greenishTeal : white)};
`;
