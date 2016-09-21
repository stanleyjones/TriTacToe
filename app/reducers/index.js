import { CHANGE_SETTINGS, NEW_GAME, SELECT_SPACE } from '../actions';
import { PLAYERS, SOUNDS } from '../constants';
import { createGame, getCondition, updateBoard } from '../helpers';

const initialSettings = { grid: 4, obstacles: false, players: 3 };

export default function rootReducer(state = createGame(PLAYERS, initialSettings), action) {
  switch (action.type) {

    case CHANGE_SETTINGS:
      return Object.assign({}, state, createGame(PLAYERS, action.settings));

    case NEW_GAME:
      return Object.assign({}, state, createGame(PLAYERS, state.settings));

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
