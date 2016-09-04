import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from '../styles';

export default function Region({ children, size = 1 }) {
  return <View style={[styles.region, { flex: size }]}>{children}</View>;
}

Region.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
};
