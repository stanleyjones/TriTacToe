import React from 'react';
import { StyleSheet, View } from 'react-native';

import styles from '../styles';

export default function PlayerIcon({ player }) {
  return <View style={{ ...StyleSheet.flatten(styles.playerIcon), backgroundColor: player }} />;
}
