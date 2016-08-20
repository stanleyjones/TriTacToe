import { StyleSheet } from 'react-native';

const color = 'white';

const scene = {
  alignItems: 'center',
  backgroundColor: '#222',
  flex: 1,
  justifyContent: 'center',
};

const text = {
  color: 'white',
  fontFamily: 'HelveticaNeue-UltraLight',
  fontSize: 24,
  textAlign: 'center',
  margin: 10,
};

export default StyleSheet.create({

  button: {
    backgroundColor: 'yellow',
    borderRadius: 5,
    margin: 10,
    opacity: 0.5,
    padding: 10,
  },

  buttonText: {
    ...text,
    color: 'black',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 14,
    margin: 0,
  },

  game: {
    ...scene,
  },

  gameBoard: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  gameSpace: {
    backgroundColor: 'black',
    height: 75,
    justifyContent: 'center',
    margin: 5,
    opacity: 1,
    width: 75,
  },

  welcome: {
    ...scene,
  },

  bigText: {
    ...text,
    color: 'yellow',
    fontSize: 64,
    margin: 10,
  },

  text,

});
