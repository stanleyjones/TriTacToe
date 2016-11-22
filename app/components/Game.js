import color from 'color';
import React, { Component, PropTypes } from 'react';
import { Animated, NativeModules, Text } from 'react-native';

import styles from '../styles';
import { AboutModal, Button, GameBoard, PlayerIcon, Region, SettingsModal, IconButton } from './';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: new Animated.Value(0),
      settings: false,
      about: false,
      winner: props.theme.background,
    };
    this.toggleModal = this.toggleModal.bind(this);
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

  toggleModal(modal, visibility) {
    return () => { this.setState({ [modal]: visibility }); };
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

        <IconButton name="question" theme={theme} onPress={this.toggleModal('about', true)} left />
        <AboutModal
          closeModal={this.toggleModal('about', false)}
          theme={theme}
          visible={this.state.about}
        />

        <IconButton name="gear" theme={theme} onPress={this.toggleModal('settings', true)} right />
        <SettingsModal
          changeSettings={changeSettings}
          closeModal={this.toggleModal('settings', false)}
          settings={settings}
          theme={theme}
          visible={this.state.settings}
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
