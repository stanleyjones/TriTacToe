import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Game } from '../components';
import { changeSettings, newGame, selectSpace } from '../actions';

class App extends Component {
  componentDidMount() { this.props.newGame(); }
  render() { return <Game {...this.props} />; }
}

App.propTypes = {
  newGame: PropTypes.func,
};

const mapStateToProps = state => ({
  player: state.players[state.player],
  board: state.board,
  condition: state.condition,
  settings: state.settings,
  theme: state.theme,
  winCombos: state.winCombos,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSettings,
  newGame,
  selectSpace,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
