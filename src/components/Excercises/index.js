import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TypeExcercise from './TypeExcercise';
import Subtitle from '../Subtitle';
import { Wrap } from './StyledTypeExc';

const Exercises = ({ excercises }) => (
  <Fragment>
    <Subtitle text="Exercises" />
    <Wrap>
      {excercises.map(item => (
        <TypeExcercise key={item.name} name={item.name} image={item.image} />
      ))}
    </Wrap>
  </Fragment>
);

Exercises.propTypes = {
  excercises: PropTypes.instanceOf(Object).isRequired,
};

export default Exercises;
