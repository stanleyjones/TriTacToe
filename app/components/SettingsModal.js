import React, { Component, PropTypes } from 'react';
import { Modal, SegmentedControlIOS, Text, View } from 'react-native';

import styles from '../styles';
import { Button, Region } from './';

export default class SettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridIndex: 0,
    };
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  cancel() { this.props.closeModal(); }
  confirm() { this.props.closeModal(); }

  setGridSize(value) {
    this.setState({ gridIndex: value });
  }

  render() {
    return (
      <Modal animationType="fade" transparent={false} visible={this.props.visible}>
        <View style={styles.settingsModal}>
        <Region>
          <Text>Advanced Settings</Text>
          <View>
            <SegmentedControlIOS
              values={['4x4', '5x5', '6x6']}
              selectedIndex={this.state.gridIndex}
              tintColor="#fff"
              onValueChange={this.setGridSize}
            />
          </View>

          <Button onPress={this.confirm}>Confirm</Button>
        </Region>
        </View>
      </Modal>
    );
  }
}

SettingsModal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
  visible: PropTypes.bool,
};
