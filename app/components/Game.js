import Color from 'color';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import {
  Button,
  GameBoard,
  PlayerIcon,
  Region,
  Scene,
} from './';

import styles from '../styles';

const statusText = (condition, player) => {
  switch(condition) {
    case 0:
    case 1: return <Text style={styles.text}>Player <PlayerIcon player={player} />'s turn</Text>
    case 2: return <Text style={styles.text}>Player <PlayerIcon player={player} /> wins!</Text>
    case 3: return <Text style={styles.text}>No one wins</Text>
  }
}

export default function Game({ condition, newGame, player, ...props }) {
  const winStyle = condition === 2
    ? { backgroundColor: Color(player).darken(0.67).hexString() }
    : {};
  return (
    <Scene style={{ ...StyleSheet.flatten(styles.game), ...winStyle }}>
      <Region>{statusText(condition, player)}</Region>
      <Region><GameBoard {...props} condition={condition}/></Region>
      <Region>{condition > 1 ? <Button onPress={newGame}>New Game</Button> : null}</Region>
    </Scene>
  );
}
