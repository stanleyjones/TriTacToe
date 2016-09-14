import Sound from 'react-native-sound';

export const BACKGROUND = '#222222';
export const PLAYERS = ['#FFD219', '#FF00E5', '#14CCBB'];
export const SOUNDS = {
  lose: new Sound('lose.mp3', Sound.MAIN_BUNDLE),
  playerSelect: [
    new Sound('select.mp3', Sound.MAIN_BUNDLE),
    new Sound('select.mp3', Sound.MAIN_BUNDLE),
    new Sound('select.mp3', Sound.MAIN_BUNDLE),
  ],
  win: new Sound('win.mp3', Sound.MAIN_BUNDLE),
};
export const SPACE = '#111111';
