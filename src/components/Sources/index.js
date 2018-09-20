import React, { Fragment } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Subtitle from '../Subtitle';
import { StyledSource, IconWrap, ContentWrap } from './StyledSource';

const Sources = ({ result }) => {
  const [text, url] = result;
  return (
    <Fragment>
      <Subtitle text="Sources & more info" />
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <ContentWrap>
          <IconWrap>
            <Icon name="open-in-new" size={18} color="rgb(244, 119, 89)" />
          </IconWrap>
          <StyledSource>{text}</StyledSource>
        </ContentWrap>
      </TouchableOpacity>
    </Fragment>
  );
};

Sources.propTypes = {
  result: PropTypes.instanceOf(Array).isRequired,
};

export default Sources;
