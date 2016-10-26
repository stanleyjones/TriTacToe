import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

export default function Button(props) {
  const color = props.theme.text;
  return (
    <TouchableHighlight style={[styles.button, { borderColor: color }]} onPress={props.onPress}>
      <Text style={[styles.buttonText, { color }]}>{props.children}</Text>
    </TouchableHighlight>
  );
}
Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
  theme: PropTypes.object,
};
