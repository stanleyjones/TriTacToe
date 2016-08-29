import cloneDeep from 'lodash/cloneDeep';
import shuffle from 'lodash/shuffle';
import Sound from 'react-native-sound';

import { NEW_GAME, SELECT_SPACE } from '../actions';

// CONSTANTS

const GRID = 4;
const PLAYERS = ['#FFD219', '#FF00E5', '#14CCBB'];

const SOUNDS = {
  lose: new Sound('lose.mp3', Sound.MAIN_BUNDLE),
  select: new Sound('select.mp3', Sound.MAIN_BUNDLE),
  win: new Sound('win.mp3', Sound.MAIN_BUNDLE),
};

// HELPERS

const createGame = (grid, players) => ({
  board: createBoard(grid),
  condition: 0,
  player: 0,
  players: shuffle(players),
  turn: 0,
});

const createBoard = grid => new Array(grid).fill([]).map(row => new Array(grid).fill(null));

const makeCombo = ([rowInit, colInit], [rowMod, colMod], length = 3) =>
  new Array(length).fill(null).map((value, index) =>
    [rowInit + (index * rowMod), colInit + (index * colMod)]
  );

const getWinCombos = board =>
  board.reduce((winCombos, row, r) =>
    row.reduce((combos, col, c) => {
      if (r + 2 < board.length) { combos.push(makeCombo([r,c], [1,0])); }
      if (c + 2 < board.length) { combos.push(makeCombo([r,c], [0,1])); }
      if (r + 2 < board.length && c + 2 < board.length) { combos.push(makeCombo([r,c], [1,1])); }
      if (r > 1 && c + 2 < board.length) { combos.push(makeCombo([r,c], [-1,1])); }
      return combos;
    }, winCombos)
  , []);

const getSpace = (board, [row, col]) => board[row][col];

const didPlayerWin = board =>
  getWinCombos(board).some(combination => {
    const firstSpace = getSpace(board, combination[0]);
    return combination.every(position => {
      const space = getSpace(board, position);
      return space && space == firstSpace;
    });
  });

const canAnyPlayerWin = board =>
  getWinCombos(board).some(combination => {
    const players = combination.reduce((players, position) => {
      const space = getSpace(board, position);
      return space ? players.concat(space) : players;
    }, []);
    return players.length < 2;
  });

// REDUCER

const initialState = {
  appName: 'TriTacToe',
  game: createGame(GRID, PLAYERS),
  routes: [
    { title: 'Welcome', index: 0 },
    { title: 'Game', index: 1 },
  ],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case NEW_GAME:
      return Object.assign({}, state, { game: createGame(GRID, PLAYERS) });

    case SELECT_SPACE: {
      SOUNDS.select.play();

      const { game: { board: lastBoard, player: lastPlayer, players, turn } } = state;
      const [row, col] = action.position;

      const board = cloneDeep(lastBoard);
      board[row][col] = players[lastPlayer];

      let condition = 1;
      if (didPlayerWin(board)) { condition = 2; }
      if (!canAnyPlayerWin(board)) { condition = 3; }

      const player = condition < 2 ? (lastPlayer + 1) % players.length : lastPlayer;

      if (condition === 2) { SOUNDS.win.play(); }
      if (condition === 3) { SOUNDS.lose.play(); }

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
