// Actions

export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
export const NEW_GAME = 'NEW_GAME';
export const SELECT_SPACE = 'SELECT_SPACE';

// Action Creators

export const changeSettings = (settings) => ({ type: CHANGE_SETTINGS, settings });
export const newGame = () => ({ type: NEW_GAME });
export const selectSpace = (position) => ({ type: SELECT_SPACE, position });
