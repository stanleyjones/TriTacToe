import cloneDeep from 'lodash/cloneDeep';

import { NEW_GAME, SELECT_SPACE } from '../actions';

const initialState = {
  appName: 'TriTacToe',
  currentPlayer: 0,
  gameBoard: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  players: ['A','M','D'],
  routes: [
    { title: 'Welcome', index: 0 },
    { title: 'Game', index: 1 },
  ],
};

export default function rootReducer(state = initialState, action) {
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case NEW_GAME: {
      const { currentPlayer, gameBoard } = initialState;

      return Object.assign({}, state, { currentPlayer, gameBoard: cloneDeep(gameBoard) });
    }

    case SELECT_SPACE: {
      const { currentPlayer: lastPlayer, gameBoard: lastGameBoard, players } = state;
      const [row, column] = action.position;

      const gameBoard = cloneDeep(lastGameBoard);
      const currentPlayer = (lastPlayer + 1) % players.length;
      gameBoard[row][column] = players[currentPlayer];

      return Object.assign({}, state, { gameBoard, currentPlayer });
    }

    default:
      return state;
  }
}
