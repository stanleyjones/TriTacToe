import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

export default function ToggleSettings(props) {
  return (
    <TouchableHighlight style={styles.toggleSettings} onPress={props.onPress}>
      <Text style={styles.textButtonText}>{props.children}</Text>
    </TouchableHighlight>
  );
}
ToggleSettings.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};
