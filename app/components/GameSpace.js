import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

export default function GameSpace({ gameBoard, position, selectSpace }) {
  const [row, column] = position;
  const onPress = position => () => { selectSpace(position); }

  return (
    <TouchableHighlight onPress={onPress(position)} style={styles.gameSpace}>
      <Text style={styles.bigText}>{gameBoard[row][column]}</Text>
    </TouchableHighlight>
  );
}
