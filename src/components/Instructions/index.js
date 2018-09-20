import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Subtitle from '../Subtitle';
import { StyledInstruct, Tip } from './StyledInstruct';

const Instruction = ({ data: { title, points } }) => (
  <Fragment>
    <Subtitle text={title} />
    {points.map(i => (
      <StyledInstruct key={i}>{i}</StyledInstruct>
    ))}
    <Tip>
      Tip: If you plan to exercise after work, be sure to bring your fitness
      gear with you. Check out tis link for more tips to keep you motivated:
      Show me more links
    </Tip>
  </Fragment>
);

Instruction.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Instruction;
