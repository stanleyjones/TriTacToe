import { AsyncStorage } from 'react-native';

// Actions

export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const NEW_GAME = 'NEW_GAME';
export const SELECT_SPACE = 'SELECT_SPACE';

// Action Creators

export const newGame = () => ({ type: NEW_GAME });
export const selectSpace = position => ({ type: SELECT_SPACE, position });
export const loadSettings = settings => ({ type: LOAD_SETTINGS, settings });

export const asyncLoadSettings = async (store) => {
  try {
    const value = await AsyncStorage.getItem('TriTacToe:settings');
    if (value) { store.dispatch(loadSettings(JSON.parse(value))); }
  } catch (err) {
    // nothing
  }
};

export const changeSettings = (settings) => {
  try {
    AsyncStorage.setItem('TriTacToe:settings', JSON.stringify(settings));
  } catch (err) {
    // nothing
  }
  return ({ type: CHANGE_SETTINGS, settings });
};
