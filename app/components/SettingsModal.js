import React, { Component, PropTypes } from 'react';
import { Dimensions, Modal, SegmentedControlIOS, Text, View } from 'react-native';

import styles from '../styles';
import { Button, Region, TextButton } from './';

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
    const { width } = Dimensions.get('window');
    const segmentWidth = width - 2 * 20;

    return (
      <Modal animationType="slide" transparent={true} visible={this.props.visible}>
        <View style={[styles.settingsModal, { width }]}>
          <Region>
            <Text style={styles.label}>Settings</Text>
            <SegmentedControlIOS
              values={['4x4', '5x5', '6x6']}
              selectedIndex={this.state.gridIndex}
              tintColor="#fff"
              onValueChange={this.setGridSize}
              style={[styles.segmentedControl, { width: segmentWidth }]}
            />
            <SegmentedControlIOS
              values={['No Obstacles', 'Obstacles']}
              selectedIndex={this.state.gridIndex}
              tintColor="#fff"
              onValueChange={this.setGridSize}
              style={[styles.segmentedControl, { width: segmentWidth }]}
            />
            <SegmentedControlIOS
              values={['3 Players', '2 (1 Robot)', '1 (2 Robots)']}
              selectedIndex={this.state.gridIndex}
              tintColor="#fff"
              onValueChange={this.setGridSize}
              style={[styles.segmentedControl, { width: segmentWidth }]}
            />
          </Region>
          <TextButton onPress={this.cancel} left negative>Cancel</TextButton>
          <TextButton onPress={this.confirm} right positive>Confirm</TextButton>
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
