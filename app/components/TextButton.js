import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

export default function TextButton(props) {
  const style = [props.textButton];
  const textStyle = [props.textButtonText];

  if (props.left) { style.push(styles.lowerLeft); }
  if (props.right) { style.push(styles.lowerRight); }
  if (props.positive) { textStyle.push({ color: '#0f0' }); }
  if (props.negative) { textStyle.push({ color: '#f00' }); }

  return (
    <TouchableHighlight style={style} onPress={props.onPress} underlayColor="transparent">
      <Text style={textStyle}>{props.children}</Text>
    </TouchableHighlight>
  );
}
TextButton.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.number,
};
