import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from '../styles';

export default function PlayerIcon({ player }) {
  return <View style={[styles.playerIcon, { backgroundColor: player }]} />;
}

PlayerIcon.propTypes = {
  player: PropTypes.string,
};
