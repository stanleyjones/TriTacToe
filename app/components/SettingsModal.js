import React, { Component, PropTypes } from 'react';
import { Dimensions, Modal, SegmentedControlIOS, Text, View } from 'react-native';

import styles from '../styles';
import { Region, TextButton } from './';

const options = {
  grid: [
    { label: '4x4', value: 4 },
    { label: '5x5', value: 5 },
    { label: '6x6', value: 6 },
  ],
  obstacles: [
    { label: 'No Obstacles', value: false },
    { label: 'Obstacles', value: true },
  ],
  players: [
    { label: '3 Players', value: 3 },
    { label: '2 (1 Robot)', value: 2 },
    { label: '1 (2 Robots)', value: 1 },
  ],
};

export default class SettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.settings);
    this.changeSetting = this.changeSetting.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  changeSetting(setting) {
    return (label) => {
      this.setState({ [setting]: options[setting].find(option => option.label === label).value });
    };
  }

  confirm() { this.props.closeModal(); this.props.changeSettings(this.state); }
  cancel() { this.props.closeModal(); this.setState(Object.assign({}, this.props.settings)); }

  render() {
    const { width } = Dimensions.get('window');
    const segmentWidth = width - (2 * 20);

    return (
      <Modal animationType="slide" transparent visible={this.props.visible}>
        <View style={[styles.settingsModal, { width }]}>
          <Region>
            <Text style={styles.label}>Settings</Text>
            <SegmentedControlIOS
              values={options.grid.map(option => option.label)}
              selectedIndex={options.grid.findIndex(option => option.value === this.state.grid)}
              tintColor="#fff"
              onValueChange={this.changeSetting('grid')}
              style={[styles.segmentedControl, { width: segmentWidth }]}
            />
            <SegmentedControlIOS
              values={options.obstacles.map(option => option.label)}
              selectedIndex={options.obstacles.findIndex(option => option.value === this.state.obstacles)}
              tintColor="#fff"
              onValueChange={this.changeSetting('obstacles')}
              style={[styles.segmentedControl, { width: segmentWidth }]}
            />
            <SegmentedControlIOS
              values={options.players.map(option => option.label)}
              selectedIndex={options.players.findIndex(option => option.value === this.state.players)}
              tintColor="#fff"
              onValueChange={this.changeSetting('players')}
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
  changeSettings: PropTypes.func,
  children: PropTypes.node,
  closeModal: PropTypes.func,
  settings: PropTypes.object,
  visible: PropTypes.bool,
};
