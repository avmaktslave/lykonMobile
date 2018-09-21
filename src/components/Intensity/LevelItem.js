import React, { PureComponent } from 'react';
import { bool, number, func } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import {
  Num,
  Level,
  Block,
  NumText,
  Text,
  Line,
  InLine,
  Separate,
} from './StyledIntensity';

export default class LevelItem extends PureComponent {
  static propTypes = {
    selected: bool.isRequired,
    id: number.isRequired,
    onPressItem: func.isRequired,
    target: number.isRequired,
  };

  _onPress = () => {
    const { onPressItem, id } = this.props;
    onPressItem(id);
  };

  render() {
    const { selected, target, id } = this.props;
    const color = selected && true;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <Level>
          <Num color={color}>{target}</Num>
          <Block>
            <Text>
              <NumText>{target} minutes</NumText> per week
            </Text>
            <Line>
              <InLine color={color} id={id} />
            </Line>
          </Block>
        </Level>
        <Separate />
      </TouchableOpacity>
    );
  }
}
