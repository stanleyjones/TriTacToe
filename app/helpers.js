import shuffle from 'lodash/shuffle';
import cloneDeep from 'lodash/cloneDeep';
import { Dimensions } from 'react-native';

import { GRID } from './constants';

const createBoard = grid => new Array(grid).fill([]).map(() => new Array(grid).fill(null));

const makeCombo = ([rowInit, colInit], [rowMod, colMod], length = 3) =>
  new Array(length).fill(null).map((value, index) =>
    [rowInit + (index * rowMod), colInit + (index * colMod)]
  );

const getWinCombos = board =>
  board.reduce((winCombos, row, r) =>
    row.reduce((combos, col, c) => {
      if (r + 2 < board.length) { combos.push(makeCombo([r, c], [1, 0])); }
      if (c + 2 < board.length) { combos.push(makeCombo([r, c], [0, 1])); }
      if (r + 2 < board.length && c + 2 < board.length) { combos.push(makeCombo([r, c], [1, 1])); }
      if (r > 1 && c + 2 < board.length) { combos.push(makeCombo([r, c], [-1, 1])); }
      return combos;
    }, winCombos)
  , []);

export const createGame = (grid, players) => {
  const board = createBoard(grid);
  return {
    board,
    condition: 0,
    player: 0,
    players: shuffle(players),
    winCombos: getWinCombos(board),
  };
};

export const getSpace = (board, [row, col]) => board[row][col];

export const getSpaceSize = () => {
  const MARGIN = 10;
  const { height, width } = Dimensions.get('window');
  return (Math.min(height / 2, width) - ((GRID - 1) * MARGIN) - (2 * MARGIN)) / GRID;
};

export const updateBoard = (board, [row, col], player) => {
  const newBoard = cloneDeep(board);
  newBoard[row][col] = player;
  return newBoard;
};

const canAnyPlayerWin = (board, winCombos) =>
  winCombos.some(combination => {
    const players = combination.reduce((comboPlayers, position) => {
      const space = getSpace(board, position);
      return space ? comboPlayers.concat(space) : comboPlayers;
    }, []);
    return players.length < 2;
  });

export const getWinningCombo = (board, winCombos) =>
  winCombos.find(combination => {
    const firstSpace = getSpace(board, combination[0]);
    return combination.every(position => {
      const space = getSpace(board, position);
      return space && space === firstSpace;
    });
  }) || [];

export const getCondition = (board, winCombos) => {
  if (getWinningCombo(board, winCombos).length) { return 2; }
  if (!canAnyPlayerWin(board, winCombos)) { return 3; }
  return 1;
};
