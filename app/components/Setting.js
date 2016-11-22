import React, { PropTypes } from 'react';
import { SegmentedControlIOS } from 'react-native';

import styles from '../styles';

export default function Setting({ onChange, options, selected, width }) {
  return (
    <SegmentedControlIOS
      onValueChange={onChange}
      selectedIndex={options.findIndex(option => option.value === selected)}
      style={[styles.segmentedControl, { width }]}
      tintColor="#fff"
      values={options.map(option => option.label)}
    />
  );
}
Setting.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  width: PropTypes.number,
};
