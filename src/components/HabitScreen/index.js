import React from 'react';
import { Container, Content } from './HabitStyled';
import Button from '../Button';
import Habit from '../Habit';
import Benefits from '../Benefits';
import Exercises from '../Excercises';
import * as habits from '../../habits_details.json';

class HabitScreen extends React.PureComponent {
  state = {
    habits,
  };

  render() {
    const {
      habits: { biomarkers, benefits, excercises },
    } = this.state;
    return (
      <Container>
        <Habit biomarkers={biomarkers} />
        <Content>
          <Benefits benefits={benefits} />
          <Exercises excercises={excercises} />
          <Button />
        </Content>
      </Container>
    );
  }
}

export default HabitScreen;
