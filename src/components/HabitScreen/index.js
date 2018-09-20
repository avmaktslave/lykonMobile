import React from 'react';
import { Container, Content } from './HabitStyled';
import Button from '../Button';
import Habit from '../Habit';
import Benefits from '../Benefits';
import Exercises from '../Excercises';
import * as habits from '../../habits_details.json';
import Instruction from '../Instructions';
import Sources from '../Sources';
import Intensity from '../Intensity';

class HabitScreen extends React.PureComponent {
  state = {
    habits,
  };

  ParseInstruction = () => {
    const {
      habits: { instructions },
    } = this.state;
    const arr = instructions.split('\n');
    return arr;
  };

  setDataToHabit = () => {
    const arr = this.ParseInstruction();
    const result = arr.slice(5);
    return result;
  };

  setDataToInstruction = () => {
    const arr = this.ParseInstruction();
    const title = arr.splice(0, 1).join();
    const points = arr.splice(0, 3);
    const data = {
      title,
      points,
    };
    return data;
  };

  setDataToSources = () => {
    const {
      habits: { sources },
    } = this.state;
    const reg = /\[(.*)\]\((.*)\)/;
    const arr = sources.split('\n');
    const result = arr[0].split(reg).slice(1, 3);
    return result;
  };

  render() {
    const {
      habits: { biomarkers, benefits, excercises, levels },
    } = this.state;
    return (
      <Container>
        <Habit biomarkers={biomarkers} result={this.setDataToHabit()} />
        <Content>
          <Intensity levels={levels} />
          <Instruction data={this.setDataToInstruction()} />
          <Benefits benefits={benefits} />
          <Exercises excercises={excercises} />
          <Sources result={this.setDataToSources()} />
          <Button />
        </Content>
      </Container>
    );
  }
}

export default HabitScreen;
