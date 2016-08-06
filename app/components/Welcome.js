import React from 'react';
import { Text } from 'react-native';

import styles from '../styles';

export default function Welcome(props) {
  return <Text style={styles.welcome}>{props.children}</Text>;
}
