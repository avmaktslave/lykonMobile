import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import LevelItem from './LevelItem';
import Subtitle from '../Subtitle';

class Intensity extends PureComponent {
  static propTypes = {
    levels: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      levels: props.levels,
      activeId: null,
    };
  }

  _onPressItem = id => {
    this.setState({ activeId: id });
  };

  render() {
    const { levels, activeId } = this.state;
    return (
      <Fragment>
        <Subtitle text="Intensity" />
        {levels.map(i => (
          <LevelItem
            id={i.target}
            key={i.target}
            target={i.target}
            onPressItem={this._onPressItem}
            selected={activeId === i.target}
          />
        ))}
      </Fragment>
    );
  }
}

export default Intensity;
