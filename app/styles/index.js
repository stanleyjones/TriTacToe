import { StyleSheet } from 'react-native';

const text = {
  color: 'white',
  fontFamily: 'HelveticaNeue-UltraLight',
  fontSize: 24,
  lineHeight: 24,
  margin: 10,
  textAlign: 'center',
};

export default StyleSheet.create({

  bigText: {
    ...text,
    color: 'yellow',
    fontSize: 64,
    lineHeight: 64,
  },

  button: {
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    margin: 10,
    padding: 10,
  },

  buttonText: {
    ...text,
    fontFamily: 'HelveticaNeue-UltraLight',
    margin: 0,
  },

  game: {
    alignItems: 'center',
    backgroundColor: '#222',
    flex: 1,
    justifyContent: 'center',
  },

  gameBoard: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  gameSpace: {
    backgroundColor: 'black',
    borderRadius: 5,
    height: 75,
    justifyContent: 'center',
    margin: 5,
    opacity: 1,
    width: 75,
  },

  playerIcon: {
    borderRadius: 9,
    height: 18,
    width: 18,
  },

  region: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  text,

  token: {
    borderRadius: 50,
    flex: 1,
    margin: 10,
  },

});
