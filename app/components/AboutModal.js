import React, { Component, PropTypes } from 'react';
import { Dimensions, Modal, Text, View } from 'react-native';

import styles from '../styles';
import { Region, IconButton } from './';

export default class AboutModal extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() { this.props.closeModal(); }

  render() {
    const { width } = Dimensions.get('window');
    return (
      <Modal animationType="slide" transparent visible={this.props.visible}>
        <View style={[styles.settingsModal, { width }]}>
          <Region>
            <Text style={styles.label}>About</Text>
            <Text style={styles.about}>
              TriTacToe is a game of tic-tac-toe but for three players.
              Take turns with your friends.
              The board may be larger but you still only need 3 squares in a row to win.
              Check out advanced settings for more options and to change the color theme.
            </Text>
          </Region>
          <IconButton {...this.props} name="close" onPress={this.close} left negative />
        </View>
      </Modal>
    );
  }
}

AboutModal.propTypes = {
  closeModal: PropTypes.func,
  visible: PropTypes.bool,
};
