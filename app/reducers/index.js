import cloneDeep from 'lodash/cloneDeep';
import shuffle from 'lodash/shuffle';

import { NEW_GAME, SELECT_SPACE } from '../actions';

// CONSTANTS

const GRID = 4;
const PLAYERS = ['Adela', 'Mommy', 'Daddy'];

// HELPERS

const createBoard = grid => new Array(grid).fill([]).map(row => new Array(grid).fill(null));
const randomPlayer = players => Math.floor(Math.random() * players.length);

// @TODO: build dynamically
const winningCombinations = [

  // horizontal
  [[0, 0], [0, 1], [0, 2]],
  [[0, 1], [0, 2], [0, 3]],
  [[1, 0], [1, 1], [1, 2]],
  [[1, 1], [1, 2], [1, 3]],
  [[2, 0], [2, 1], [2, 2]],
  [[2, 1], [2, 2], [2, 3]],
  [[3, 0], [3, 1], [3, 2]],
  [[3, 1], [3, 2], [3, 3]],

  // vertical
  [[0, 0], [1, 0], [2, 0]],
  [[1, 0], [2, 0], [3, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[1, 1], [2, 1], [3, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[1, 2], [2, 2], [3, 2]],
  [[0, 3], [1, 3], [2, 3]],
  [[1, 3], [2, 3], [3, 3]],

  // diagonal
  [[0, 0], [1, 1], [2, 2]],
  [[0, 1], [1, 2], [2, 3]],
  [[1, 0], [2, 1], [3, 2]],
  [[1, 1], [2, 2], [3, 3]],
  [[2, 0], [1, 1], [0, 2]],
  [[2, 1], [1, 2], [0, 3]],
  [[3, 0], [2, 1], [1, 2]],
  [[3, 1], [2, 2], [1, 3]],
];

const getSpace = (board, [row, col]) => board[row][col];

const didPlayerWin = board =>
  winningCombinations.some(combination => {
    const firstSpace = getSpace(board, combination[0]);
    return combination.every(position => {
      const space = getSpace(board, position);
      return space && space == firstSpace;
    });
  });

// REDUCER

const initialState = {
  appName: 'TriTacToe',
  game: {
    board: createBoard(GRID),
    condition: 0,
    player: 0,
    players: shuffle(PLAYERS),
    turn: 0,
  },
  routes: [
    { title: 'Welcome', index: 0 },
    { title: 'Game', index: 1 },
  ],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case NEW_GAME:
      return Object.assign({}, state, { game: {
        ...initialState.game,
        players: shuffle(PLAYERS),
      } });

    case SELECT_SPACE: {
      const { game: { board: lastBoard, player: lastPlayer, players, turn } } = state;
      const [row, col] = action.position;

      const board = cloneDeep(lastBoard);
      board[row][col] = players[lastPlayer][0];

      const condition = didPlayerWin(board) ? 2 : turn === 15 ? 3 : 1;
      const player = condition < 2 ? (lastPlayer + 1) % players.length : lastPlayer;

      return Object.assign({}, state, { game: {
        condition,
        player,
        players,
        board,
        turn: turn + 1,
      } });
    }

    default:
      return state;
  }
}
