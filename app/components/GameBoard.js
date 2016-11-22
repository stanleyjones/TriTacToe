import React, { PropTypes } from 'react';
import { View } from 'react-native';

import GameSpace from './GameSpace';
import styles from '../styles';
import { getWinningCombo } from '../helpers';

export default function GameBoard(props) {
  const rows = props.board.map((row, index) => index);
  const cols = rows;
  const winningCombo = props.condition === 2 ? getWinningCombo(props.board, props.winCombos) : [];
  return (
    <View style={styles.gameBoard}>{rows.map((row, rowIndex) => (
      <View key={row} style={styles.row}>
        {cols.map((col, colIndex) => (
          <GameSpace
            {...props}
            index={(rows.length * rowIndex) + colIndex}
            key={col}
            position={[row, col]}
            winning={winningCombo.join(':').includes(`${row},${col}`)}
          />
        ))}
      </View>
    ))}</View>
  );
}

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array),
  condition: PropTypes.number,
  winCombos: PropTypes.arrayOf(PropTypes.array),
};
