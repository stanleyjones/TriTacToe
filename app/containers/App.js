import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Game } from '../components';
import { newGame, selectSpace } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    newGame();
  }

  render() {
    return <Game {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    player: state.game.players[state.game.player],
    board: state.game.board,
    condition: state.game.condition,
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  newGame,
  selectSpace,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
