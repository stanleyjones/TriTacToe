import color from 'color';
import React, { Component, PropTypes } from 'react';
import { Animated, TouchableHighlight, View } from 'react-native';

import styles from '../styles';
import { getSpace, getSpaceSize } from '../helpers';

export default class GameSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: new Animated.Value(0), opacity: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, { toValue: 1, delay: this.props.index * 50 }).start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.condition === 0) {
      this.state.backgroundColor.setValue(0);
      this.state.opacity.setValue(0);
      Animated.timing(this.state.opacity, { toValue: 1, delay: this.props.index * 50 }).start();
    }
    if (nextProps.condition === 2 && nextProps.winning) {
      Animated.sequence([
        Animated.timing(this.state.backgroundColor, { toValue: 100, duration: 200 }),
        Animated.timing(this.state.backgroundColor, { toValue: 50, duration: 200 }),
        Animated.timing(this.state.backgroundColor, { toValue: 100, duration: 200 }),
        Animated.timing(this.state.backgroundColor, { toValue: 50, duration: 200 }),
        Animated.timing(this.state.backgroundColor, { toValue: 100, duration: 200 }),
      ]).start();
    }
  }

  render() {
    const { board, condition, position, selectSpace, settings, theme } = this.props;
    const onPress = atPosition => () => { selectSpace(atPosition); };
    const player = getSpace(board, position) || theme.space;

    const spaceSize = getSpaceSize(settings.grid);
    const spaceStyle = [styles.gameSpace, { height: spaceSize, width: spaceSize }];
    const tokenStyle = {
      height: spaceSize * 0.66,
      width: spaceSize * 0.66,
      borderRadius: spaceSize * 0.33,
      backgroundColor: player,
    };
    const backgroundColor = player === theme.obstacle
      ? 'transparent'
      : this.state.backgroundColor.interpolate({
        inputRange: [0, 100],
        outputRange: [theme.space, color(player).darken(0.33).hexString()],
      });

    return player !== theme.space || condition > 1 ? (
      <Animated.View style={[spaceStyle, { backgroundColor }]}>
        <View style={tokenStyle} />
      </Animated.View>
    ) : (
      <Animated.View style={{ opacity: this.state.opacity }}>
        <TouchableHighlight
          onPress={onPress(position)}
          style={[spaceStyle, { backgroundColor: theme.space }]}
        >
          <View />
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

GameSpace.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array),
  condition: PropTypes.number,
  index: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number),
  selectSpace: PropTypes.func,
  settings: PropTypes.shape({
    grid: PropTypes.number,
    obstacles: PropTypes.bool,
    players: PropTypes.number,
    theme: PropTypes.number,
  }),
  theme: PropTypes.shape({
    background: PropTypes.string,
    obstacle: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.string),
    space: PropTypes.string,
    text: PropTypes.string,
  }),
};
