import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import Button from './Button';
import Scene from './Scene';

import styles from '../styles';

export default function Welcome(props) {
  return (
    <Scene style={styles.welcome}>
      <Text style={styles.bigText}>{props.children}</Text>
      <Text style={styles.text}>Adela's first video game</Text>
      <Button onPress={props.startGame}>Start Game</Button>
    </Scene>
  );
}
