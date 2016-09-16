import React, { Component, PropTypes } from 'react';
import { Dimensions, Modal, Text, View } from 'react-native';

import styles from '../styles';
import { Region, Setting, TextButton } from './';

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
    const settingWidth = width - (2 * 20);

    return (
      <Modal animationType="slide" transparent visible={this.props.visible}>
        <View style={[styles.settingsModal, { width }]}>
          <Region>
            <Text style={styles.label}>Settings</Text>
            <Setting
              onChange={this.changeSetting('grid')}
              options={options.grid}
              selected={this.state.grid}
              width={settingWidth}
            />
            <Setting
              onChange={this.changeSetting('obstacles')}
              options={options.obstacles}
              selected={this.state.obstacles}
              width={settingWidth}
            />
          </Region>
          <TextButton onPress={this.cancel} left negative>Cancel</TextButton>
          <TextButton onPress={this.confirm} right positive>Restart</TextButton>
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
