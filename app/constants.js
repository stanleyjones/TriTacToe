import Sound from 'react-native-sound';

export const OPTIONS = {
  grid: [
    { label: '4x4', value: 4 },
    { label: '5x5', value: 5 },
    { label: '6x6', value: 6 },
  ],
  obstacles: [
    { label: 'No Obstacles', value: false },
    { label: 'Obstacles', value: true },
  ],
  theme: [
    { label: 'Original', value: 0 },
    { label: 'Mocha', value: 1 },
    { label: 'Jalapeño', value: 2 },
  ],
};

export const SOUNDS = {
  lose: new Sound('lose.mp3', Sound.MAIN_BUNDLE),
  playerSelect: [
    new Sound('select.mp3', Sound.MAIN_BUNDLE),
    new Sound('select.mp3', Sound.MAIN_BUNDLE),
    new Sound('select.mp3', Sound.MAIN_BUNDLE),
  ],
  win: new Sound('win.mp3', Sound.MAIN_BUNDLE),
};

export const THEMES = [
  {
    background: '#222',
    obstacle: 'transparent',
    players: ['#ffd219', '#ff00e5', '#12ccbb'],
    space: '#111',
    text: '#fff',
  },
  {
    background: '#633',
    obstacle: 'transparent',
    players: ['brown', 'purple', 'violet'],
    space: '#422',
    text: '#f99',
  },
  {
    background: '#600',
    obstacle: 'transparent',
    players: ['orange', 'yellow', 'red'],
    space: '#511',
    text: '#f90',
  },
];
