import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import Button from './Button';
import GameBoard from './GameBoard';
import Scene from './Scene';
import styles from '../styles';

const statusText = (condition, player) => {
  switch(condition) {
    case 0:
    case 1: return <Text style={styles.text}>{player}'s turn</Text>
    case 2: return <Text style={styles.text}>{player} wins!</Text>
    case 3: return <Text style={styles.text}>No one wins</Text>
  }
}

export default function Game({ condition, newGame, player, ...props }) {
  return (
    <Scene style={styles.game}>
      {statusText(condition, player)}
      <GameBoard {...props} condition={condition}/>
      {condition > 1 ? <Button onPress={newGame}>New Game</Button> : null}
    </Scene>
  );
}
