import React from 'react';
import { View } from 'react-native';

import styles from '../styles';

export default function Region({ children }) {
  return <View style={styles.region}>{children}</View>;
}
