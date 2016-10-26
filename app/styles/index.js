import { StyleSheet } from 'react-native';

const LIGHT = 'HelveticaNeue-Light';
const ULTRALIGHT = 'HelveticaNeue-UltraLight';

const text = {
  color: 'white',
  fontFamily: ULTRALIGHT,
  fontSize: 48,
  lineHeight: 48,
  margin: 10,
  textAlign: 'center',
};

export default StyleSheet.create({

  button: {
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },

  buttonText: Object.assign({}, text, {
    fontFamily: LIGHT,
    fontSize: 24,
    lineHeight: 24,
    margin: 0,
  }),

  game: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  gameBoard: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  gameSpace: {
    alignItems: 'center',
    borderRadius: 5,
    height: 75,
    justifyContent: 'center',
    margin: 5,
    opacity: 1,
    width: 75,
  },

  label: Object.assign({}, text, {
    fontSize: 24,
  }),

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

  segmentedControl: {
    marginTop: 20,
    maxWidth: 480,
  },

  settingsModal: {
    backgroundColor: '#333',
    bottom: 0,
    paddingBottom: 100,
    position: 'absolute',
  },

  text,

  textButton: {
    backgroundColor: 'transparent',
  },

  textButtonText: Object.assign({}, text, {
    color: '#fff',
    fontFamily: LIGHT,
    fontSize: 16,
  }),

  lowerLeft: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },

  lowerRight: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

});
