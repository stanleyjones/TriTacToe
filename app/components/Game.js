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
      games: 0,
      showAbout: false,
      showSettings: false,
      winner: props.theme.background,
    };
    this.showInterstitial = this.showInterstitial.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.condition === 0) {
      this.setState({ games: this.state.games += 1 }, this.showInterstitial);
      Animated.timing(this.state.backgroundColor, { toValue: 0 }).start();
    }
    if (nextProps.condition === 2) {
      this.setState({ winner: nextProps.player });
      Animated.timing(this.state.backgroundColor, { toValue: 100 }).start();
    }
  }

  showInterstitial() {
    if (this.state.games % 3 === 0) { NativeModules.ChartboostBridge.showInterstitial(); }
  }

  toggleModal(modal, visibility) {
    return () => { this.setState({ [modal]: visibility }); };
  }

  statusText(condition, player) {
    const textStyle = [styles.text, { color: this.props.theme.text }];
    switch (condition) {
      case 0:
      case 1: return <Text style={textStyle}><PlayerIcon player={player} />&apos;s turn</Text>;
      case 2: return <Text style={textStyle}><PlayerIcon player={player} /> wins!</Text>;
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

        <IconButton
          name="question"
          onPress={this.toggleModal('showAbout', true)}
          theme={theme}
          left
        />
        <AboutModal
          closeModal={this.toggleModal('showAbout', false)}
          theme={theme}
          visible={this.state.showAbout}
        />

        <IconButton
          name="gear"
          onPress={this.toggleModal('showSettings', true)}
          theme={theme}
          right
        />
        <SettingsModal
          changeSettings={changeSettings}
          closeModal={this.toggleModal('showSettings', false)}
          settings={settings}
          theme={theme}
          visible={this.state.showSettings}
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
