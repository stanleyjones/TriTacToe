import { StyleSheet } from 'react-native';

const color = 'white';

const scene = {
  alignItems: 'center',
  backgroundColor: 'purple',
  flex: 1,
  justifyContent: 'center',
};

export default StyleSheet.create({

  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 10,
    opacity: 0.5,
    padding: 10,
  },

  game: {
    ...scene,
    backgroundColor: 'teal',
  },

  gameBoard: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  gameSpace: {
    backgroundColor: 'purple',
    height: 100,
    justifyContent: 'center',
    margin: 10,
    opacity: 0.25,
    width: 100,
  },

  welcome: {
    ...scene,
    backgroundColor: 'purple',
  },

  bigText: {
    color,
    fontFamily: 'HelveticaNeue-UltraLight',
    fontSize: 64,
    margin: 10,
    textAlign: 'center',
  }

});
