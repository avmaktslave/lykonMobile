import React, { Fragment } from 'react';
import { string } from 'prop-types';
import Description from '../Description';
import Subtitle from '../Subtitle';

const Benefits = ({ benefits }) => (
  <Fragment>
    <Subtitle text="Your benefits" />
    <Description text={benefits} />
  </Fragment>
);

Benefits.propTypes = {
  benefits: string.isRequired,
};

export default Benefits;
