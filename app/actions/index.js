import { AsyncStorage } from 'react-native';

// Actions

export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const NEW_GAME = 'NEW_GAME';
export const SELECT_SPACE = 'SELECT_SPACE';

// Action Creators

export const loadSettings = settings => ({ type: LOAD_SETTINGS, settings });
export const newGame = () => ({ type: NEW_GAME });
export const selectSpace = position => ({ type: SELECT_SPACE, position });

export const asyncLoadSettings = async (store) => {
  const value = await AsyncStorage.getItem('TriTacToe:settings');
  if (value) { store.dispatch(loadSettings(JSON.parse(value))); }
};

export const changeSettings = (settings) => {
  AsyncStorage.setItem('TriTacToe:settings', JSON.stringify(settings));
  return ({ type: CHANGE_SETTINGS, settings });
};
