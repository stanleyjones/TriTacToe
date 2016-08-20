import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import styles from '../styles';

export default function GameSpace({ board, condition, position, selectSpace }) {
  const [row, col] = position;
  const onPress = position => () => { selectSpace(position); }

  return board[row][col] || condition > 1 ? (
    <View style={styles.gameSpace}>
      <Text style={styles.bigText}>{board[row][col]}</Text>
    </View>
  ) : (
    <TouchableHighlight onPress={onPress(position)} style={styles.gameSpace}>
      <Text style={styles.bigText}>{board[row][col]}</Text>
    </TouchableHighlight>
  );
}
