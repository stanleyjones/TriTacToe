import React, { PropTypes } from 'react';
import { SegmentedControlIOS } from 'react-native';

import styles from '../styles';

export default function Setting({ onChange, options, selected, width }) {
  return (
    <SegmentedControlIOS
      values={options.map(option => option.label)}
      selectedIndex={options.findIndex(option => option.value === selected)}
      tintColor="#fff"
      onValueChange={onChange}
      style={[styles.segmentedControl, { width }]}
    />
  );
}
Setting.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  selected: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  width: PropTypes.number,
};
