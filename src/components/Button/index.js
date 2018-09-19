import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyledButton } from './StyledButton';

const Button = () => (
  <TouchableOpacity onPress={() => null}>
    <StyledButton>Start habit</StyledButton>
  </TouchableOpacity>
);

export default Button;
