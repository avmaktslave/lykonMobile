import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Subtitle from '../Subtitle';
import {
  Num,
  Level,
  Block,
  NumText,
  Text,
  Line,
  InLine,
} from './StyledIntensity';

class Intensity extends PureComponent {
  static propTypes = {
    levels: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    const { levels } = props;
    const [id] = levels;
    this.state = {
      colorbg: '#fff',
      color: 'rgb(82, 212, 154)',
      id: id.target,
    };
  }

  changeColor = () => {
    const { id } = this.state;
    this.setState({ colorbg: 'rgb(82, 212, 154)' });
    this.setState({ color: '#fff' });
    console.log(id);
  };

  render() {
    const { levels } = this.props;
    const { colorbg, color, id } = this.state;
    return (
      <Fragment>
        <Subtitle text="Intensity" />
        {levels.map(i => (
          <TouchableOpacity
            key={i.target}
            onPress={i.target !== id ? this.changeColor : null}
          >
            <Level>
              <Num color={color} colorbg={colorbg}>
                {i.target}
              </Num>
              <Block>
                <Text>
                  <NumText>{i.target} minutes</NumText> per week
                </Text>
                <Line>
                  <InLine color={colorbg} />
                </Line>
              </Block>
            </Level>
          </TouchableOpacity>
        ))}
      </Fragment>
    );
  }
}

export default Intensity;
