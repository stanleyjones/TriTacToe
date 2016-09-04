import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

export default function Button(props) {
  return (
    <TouchableHighlight style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableHighlight>
  );
}
Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};
