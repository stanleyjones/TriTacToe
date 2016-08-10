import React from 'react';
import { View } from 'react-native';

import GameSpace from './GameSpace';
import styles from '../styles';

export default function GameBoard(props) {
  const rows = columns = [0, 1, 2];

  return (
    <View style={styles.gameBoard}>
      {rows.map(row => (
        <View key={row} style={{flexDirection: 'row'}}>
          {columns.map(column =>
            <GameSpace {...props} key={`${row}-${column}`} position={[row, column]} />
          )}
        </View>
      ))}
    </View>
  );
}
