import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import styles from '../styles';
import { GRID } from '../reducers';

export default class GameSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, { toValue: 1, delay: this.props.index * 50 }).start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.condition === 0) {
      this.state.opacity.setValue(0);
      Animated.timing(this.state.opacity, { toValue: 1, delay: this.props.index * 50 }).start();
    }
  }

  render() {
    const { board, condition, position, selectSpace } = this.props;
    const [row, col] = position;
    const { height, width } = Dimensions.get('window');
    const onPress = position => () => { selectSpace(position); }
    const spaceSize = (Math.min(height, width) - GRID * 10 - 20) / GRID;
    const gameSpaceStyle = {
      ...StyleSheet.flatten(styles.gameSpace),
      height: spaceSize,
      width: spaceSize,
    };

    return board[row][col] || condition > 1 ? (
      <View style={gameSpaceStyle}>
        <View style={{ ...StyleSheet.flatten(styles.token), backgroundColor: board[row][col] }} />
      </View>
    ) : (
      <Animated.View style={{ opacity: this.state.opacity }}>
        <TouchableHighlight onPress={onPress(position)} style={gameSpaceStyle}>
          <View />
        </TouchableHighlight>
      </Animated.View>
    );
  }
}
