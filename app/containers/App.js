import React from 'react';
import { connect } from 'react-redux';

import { Container, Welcome } from '../components';

function App(props) {
  return (
    <Container>
      <Welcome>{props.appName}</Welcome>
    </Container>
  );
}

const mapStateToProps = state => ({
  appName: state.appName,
});

export default AppContainer = connect(mapStateToProps)(App);
