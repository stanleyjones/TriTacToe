import React from 'react';
import { View } from 'react-native';

export default function Scene(props) {
  return <View style={props.style}>{props.children}</View>;
}
