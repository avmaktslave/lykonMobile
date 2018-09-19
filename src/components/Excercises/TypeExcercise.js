import React from 'react';
import { string } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Excercise, Name, Toggle, Point } from './StyledTypeExc';

const TypeExcercise = ({ name, image }) => (
  <Excercise>
    <Name>{name}</Name>
    <TouchableOpacity onPress={() => null}>
      <Toggle>
        <Icon name="more-horiz" color="rgb(82, 212, 154)" size={26} />
      </Toggle>
    </TouchableOpacity>
  </Excercise>
);

TypeExcercise.propTypes = {
  name: string.isRequired,
  image: string.isRequired,
};

export default TypeExcercise;
