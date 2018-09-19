import React from 'react';
import { string } from 'prop-types';
import { StyledDesc } from './StyledDesc';

const Description = ({ text }) => <StyledDesc>{text}</StyledDesc>;

Description.propTypes = {
  text: string.isRequired,
};

export default Description;
