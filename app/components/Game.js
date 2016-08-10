import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import GameBoard from './GameBoard';
import Scene from './Scene';
import styles from '../styles';

export default function Game({ goBack, ...props }) {
  return (
    <Scene style={styles.game}>
      <GameBoard {...props} />
      <TouchableHighlight style={styles.button} onPress={goBack}>
        <Text>Back</Text>
      </TouchableHighlight>
    </Scene>
  );
}
