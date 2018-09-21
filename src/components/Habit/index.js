import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
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

  state = {
    opened: true,
  };

  openHandler = () => {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  };

  render() {
    const { biomarkers, result } = this.props;
    const { opened } = this.state;
    const [title, text] = result;
    return (
      <Wrapper opened={opened}>
        <TouchableOpacity onPress={this.openHandler}>
          <Icon name="expand-more" size={52} color="#fff" />
        </TouchableOpacity>
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
