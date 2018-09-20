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
    this.myRef = React.createRef();
    const { levels } = props;
    const [id] = levels;
    this.state = {
      color: '#fff',
      id: id.target,
      levels,
    };
  }

  componentDidMount = () => {
    this.setState();
  };

  changeColor = () => {
    const { id } = this.state;
    this.setState({ color: 'rgb(82, 212, 154)' });
    console.log(this.myRef);
    console.log(id);
  };

  render() {
    const { levels } = this.props;
    const { color, id } = this.state;
    return (
      <Fragment>
        <Subtitle text="Intensity" />
        {levels.map(i => (
          <TouchableOpacity
            ref={this.myRef}
            key={i.target}
            onPress={this.changeColor}
          >
            <Level>
              <Num color={color}>{i.target}</Num>
              <Block>
                <Text>
                  <NumText>{i.target} minutes</NumText> per week
                </Text>
                <Line>
                  <InLine color={color} />
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
