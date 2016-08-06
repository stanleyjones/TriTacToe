import { StyleSheet } from 'react-native';

const backgroundColor = 'rebeccapurple';
const color = 'white';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  },
  welcome: {
    color,
    fontSize: 64,
    fontFamily: 'HelveticaNeue-UltraLight',
    textAlign: 'center',
    margin: 10,
  }
});
