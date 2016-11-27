import { CHANGE_SETTINGS, LOAD_SETTINGS, NEW_GAME, SELECT_SPACE } from '../actions';
import { SOUNDS } from '../constants';
import { createGame, getCondition, updateBoard } from '../helpers';

const initialSettings = { grid: 4, obstacles: false, players: 3, theme: 0 };

export default function rootReducer(state = createGame(initialSettings), action) {
  switch (action.type) {

    case LOAD_SETTINGS:
    case CHANGE_SETTINGS:
      return Object.assign({}, state, createGame(action.settings));

    case NEW_GAME:
      return Object.assign({}, state, createGame(state.settings));

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
