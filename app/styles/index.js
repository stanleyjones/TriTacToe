import { StyleSheet } from 'react-native';

const text = {
  color: 'white',
  fontFamily: 'HelveticaNeue-UltraLight',
  fontSize: 48,
  lineHeight: 48,
  margin: 10,
  textAlign: 'center',
};

export default StyleSheet.create({

  button: {
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    margin: 10,
    padding: 10,
  },

  buttonText: Object.assign({}, text, {
    fontSize: 24,
    lineHeight: 24,
    margin: 0,
  }),

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
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    height: 75,
    justifyContent: 'center',
    margin: 5,
    opacity: 1,
    width: 75,
  },

  playerIcon: {
    borderRadius: 18,
    height: 36,
    width: 36,
  },

  region: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
  },

  text,

});
