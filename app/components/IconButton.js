import React, { PropTypes } from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import styles from '../styles';

export default function IconButton(props) {
  const style = [styles.textButton];
  let color = props.theme.text;

  if (props.left) { style.push(styles.lowerLeft); }
  if (props.right) { style.push(styles.lowerRight); }
  if (props.positive) { color = '#0f0'; }
  if (props.negative) { color = '#f00'; }

  return (
    <TouchableHighlight style={style} onPress={props.onPress} underlayColor="transparent">
      <Icon name={props.name} size={32} color={color} />
    </TouchableHighlight>
  );
}
IconButton.propTypes = {
  left: PropTypes.bool,
  negative: PropTypes.bool,
  onPress: PropTypes.func,
  positive: PropTypes.bool,
  right: PropTypes.bool,
  theme: PropTypes.shape({
    background: PropTypes.string,
    obstacle: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.string),
    space: PropTypes.string,
    text: PropTypes.string,
  }),
};
