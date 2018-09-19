import React from 'react';
import { string } from 'prop-types';
import { StyledSubtitel } from './StyledSubtitle';

const Subtitle = ({ text }) => <StyledSubtitel>{text}</StyledSubtitel>;

Subtitle.propTypes = {
  text: string.isRequired,
};

export default Subtitle;
