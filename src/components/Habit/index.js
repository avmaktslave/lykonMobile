import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, WhiteText, Header, Content, Line } from './StyledHabit';
import Subtitle from '../Subtitle';
import Description from '../Description';

export default class Habit extends PureComponent {
  static propTypes = {
    biomarkers: PropTypes.instanceOf(Object).isRequired,
  };

  state = {};

  render() {
    const { biomarkers } = this.props;
    return (
      <Wrapper>
        <Icon name="expand-more" size={52} color="#fff" />
        <Content>
          <WhiteText>Exercise</WhiteText>
          <Header>Moderate intansity training</Header>
          <Line />
          <WhiteText>
            <Icon name="arrow-forward" size={18} color="#fff" />
            {biomarkers.join(', ')}
          </WhiteText>
          <Subtitle text="Your habit" />
          <Description
            text="Start a physical activity that gets your heart pumping. Build up
            towards your required total time of 60 minuntes every week, and
            track your completed training sessions by checking off every
            succesful 15 minute interval."
          />
        </Content>
      </Wrapper>
    );
  }
}
