import React from 'react';
import { View } from 'react-native';

import GameSpace from './GameSpace';

import styles from '../styles';

export default function GameBoard(props) {
  const rows = cols = props.board.map((row, index) => index);
  return (
    <View style={styles.gameBoard}>{rows.map(row => (
      <View key={row} style={{flexDirection: 'row'}}>
        {cols.map(col => <GameSpace {...props} key={col} position={[row, col]} /> )}
      </View>
    ))}</View>
  );
}
