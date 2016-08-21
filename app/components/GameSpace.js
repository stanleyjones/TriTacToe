import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import styles from '../styles';

export default function GameSpace({ board, condition, position, selectSpace }) {
  const [row, col] = position;
  const onPress = position => () => { selectSpace(position); }

  return board[row][col] || condition > 1 ? (
    <View style={styles.gameSpace}>
      <View style={{ ...StyleSheet.flatten(styles.token), backgroundColor: board[row][col] }} />
    </View>
  ) : (
    <TouchableHighlight onPress={onPress(position)} style={styles.gameSpace}>
      <View />
    </TouchableHighlight>
  );
}
