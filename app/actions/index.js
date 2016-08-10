// Actions

export const NEW_GAME = 'NEW_GAME';
export const SELECT_SPACE = 'SELECT_SPACE';

// Action Creators

export const newGame = () => ({ type: NEW_GAME });
export const selectSpace = (position) => ({ type: SELECT_SPACE, position });
