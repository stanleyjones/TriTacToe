import color from 'color';
import React, { Component, PropTypes } from 'react';
import { Animated, Text } from 'react-native';

import styles from '../styles';
import { Button, GameBoard, PlayerIcon, Region } from './';
import { BACKGROUND } from '../constants';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: new Animated.Value(0), winner: BACKGROUND };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.condition === 0) {
      Animated.timing(this.state.backgroundColor, { toValue: 0 }).start();
    }
    if (nextProps.condition === 2) {
      this.setState({ winner: nextProps.player });
      Animated.timing(this.state.backgroundColor, { toValue: 100 }).start();
    }
  }

  statusText(condition, player) {
    switch (condition) {
      case 0:
      case 1: return <Text style={styles.text}>Player <PlayerIcon player={player} />'s turn</Text>;
      case 2: return <Text style={styles.text}>Player <PlayerIcon player={player} /> wins!</Text>;
      case 3: return <Text style={styles.text}>No one wins</Text>;
      default: return null;
    }
  }

  render() {
    const { condition, newGame, player } = this.props;
    const backgroundColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 100],
      outputRange: [BACKGROUND, color(this.state.winner).darken(0.67).hexString()],
    });
    return (
      <Animated.View style={[styles.game, { backgroundColor }]}>
        <Region>{this.statusText(condition, player)}</Region>
        <Region><GameBoard {...this.props} condition={condition} /></Region>
        <Region>{condition > 1 ? <Button onPress={newGame}>New Game</Button> : null}</Region>
      </Animated.View>
    );
  }
}

Game.propTypes = {
  condition: PropTypes.number,
  newGame: PropTypes.func,
  player: PropTypes.string,
};
