import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navigator, Text } from 'react-native';

import { Game, Welcome } from '../components';
import { newGame, selectSpace } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    const { appName, newGame, routes, ...props } = this.props;
    const startGame = () => { navigator.push(routes[1]); newGame(); }

    switch (route.title) {

      case 'Game':
        return <Game {...props} newGame={newGame} />;

      case 'Welcome':
      default:
        return <Welcome startGame={startGame}>{appName}</Welcome>;

    }
  }

  render() {
    const { routes } = this.props;

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    appName: state.appName,
    player: state.game.players[state.game.player],
    board: state.game.board,
    condition: state.game.condition,
    routes: state.routes,
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  newGame,
  selectSpace,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
