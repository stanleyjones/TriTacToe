import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import Scene from './Scene';
import styles from '../styles';

export default function Welcome(props) {
  return (
    <Scene style={styles.welcome}>
      <Text style={styles.bigText}>{props.children}</Text>
      <Text style={styles.text}>Adela's first video game</Text>
      <TouchableHighlight style={styles.button} onPress={props.newGame}>
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableHighlight>
    </Scene>
  );
}
