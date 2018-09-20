import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, WhiteText, Header, Content, Line } from './StyledHabit';
import Subtitle from '../Subtitle';
import Description from '../Description';

export default class Habit extends PureComponent {
  static propTypes = {
    biomarkers: PropTypes.instanceOf(Object).isRequired,
    result: PropTypes.instanceOf(Array).isRequired,
  };

  state = {};

  render() {
    const { biomarkers, result } = this.props;
    const [title, text] = result;
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
          <Subtitle text={title} />
          <Description text={text} />
        </Content>
      </Wrapper>
    );
  }
}
