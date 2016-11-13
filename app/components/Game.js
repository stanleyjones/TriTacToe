import color from 'color';
import React, { Component, PropTypes } from 'react';
import { Animated, NativeModules, Text } from 'react-native';

import styles from '../styles';
import { Button, GameBoard, PlayerIcon, Region, SettingsModal, TextButton } from './';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: new Animated.Value(0),
      settingsVisible: false,
      winner: props.theme.background,
    };
    this.toggleSettings = this.toggleSettings.bind(this);
  }

  componentDidMount() {
    // const { ChartboostBridge } = NativeModules;
    // ChartboostBridge.showInterstitial();
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

  toggleSettings(visibility) {
    return () => { this.setState({ settingsVisible: visibility }); };
  }

  statusText(condition, player) {
    const textStyle = [styles.text, { color: this.props.theme.text }];
    switch (condition) {
      case 0:
      case 1: return <Text style={textStyle}>Player <PlayerIcon player={player} />'s turn</Text>;
      case 2: return <Text style={textStyle}>Player <PlayerIcon player={player} /> wins!</Text>;
      case 3: return <Text style={textStyle}>No one wins</Text>;
      default: return null;
    }
  }

  render() {
    const { changeSettings, condition, newGame, player, settings, theme } = this.props;
    const backgroundColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 100],
      outputRange: [
        theme.background,
        color(this.state.winner).mix(color(theme.background)).hexString(),
      ],
    });
    return (
      <Animated.View style={[styles.game, { backgroundColor }]}>
        <Region>{this.statusText(condition, player)}</Region>
        <Region><GameBoard {...this.props} condition={condition} /></Region>
        <Region>{condition > 1 ?
          <Button theme={theme} onPress={newGame}>New Game</Button>
        : null}</Region>

        <TextButton theme={theme} onPress={this.toggleSettings(true)} right>Settings</TextButton>
        <SettingsModal
          changeSettings={changeSettings}
          closeModal={this.toggleSettings(false)}
          settings={settings}
          theme={theme}
          visible={this.state.settingsVisible}
        />
      </Animated.View>
    );
  }
}

Game.propTypes = {
  changeSettings: PropTypes.func,
  condition: PropTypes.number,
  newGame: PropTypes.func,
  player: PropTypes.string,
  settings: PropTypes.object,
  theme: PropTypes.object,
};
