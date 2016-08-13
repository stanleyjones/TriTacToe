import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import GameBoard from './GameBoard';
import Scene from './Scene';
import styles from '../styles';

export default function Game({ goBack, player, ...props }) {
  return (
    <Scene style={styles.game}>
      <Text style={styles.text}>{player}'s Turn</Text>
      <GameBoard {...props} />
      <TouchableHighlight style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableHighlight>
    </Scene>
  );
}
