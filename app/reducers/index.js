import { NEW_GAME, SELECT_SPACE } from '../actions';
import { GRID, PLAYERS, SOUNDS } from '../constants';
import { createGame, getCondition, updateBoard } from '../helpers';

export default function rootReducer(state = createGame(GRID, PLAYERS), action) {
  switch (action.type) {

    case NEW_GAME:
      return createGame(GRID, PLAYERS);

    case SELECT_SPACE: {
      const { board, player, players, winCombos } = state;
      const newBoard = updateBoard(board, action.position, players[player]);
      const condition = getCondition(newBoard, winCombos);

      SOUNDS.playerSelect[player].play();
      if (condition === 2) { SOUNDS.win.play(); }
      if (condition === 3) { SOUNDS.lose.play(); }

      return Object.assign({}, state, {
        condition,
        player: condition < 2 ? (player + 1) % players.length : player,
        board: newBoard,
      });
    }

    default:
      return state;
  }
}
