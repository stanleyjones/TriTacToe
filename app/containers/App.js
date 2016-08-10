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

    const goTo = (index) => () => { newGame(); navigator.push(routes[index]); }
    const goBack = () => { navigator.pop(); }

    // console.table(props.gameBoard);

    switch (route.title) {

      case 'Game':
        return <Game {...props} goBack={goBack} />;

      case 'Welcome':
      default:
        return <Welcome newGame={goTo(1)}>{appName}</Welcome>;

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
  console.log(state);
  return {
    appName: state.appName,
    gameBoard: state.gameBoard,
    routes: state.routes,
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  newGame,
  selectSpace,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
