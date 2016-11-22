import React, { Component, PropTypes } from 'react';
import { Dimensions, Modal, Text, View } from 'react-native';

import styles from '../styles';
import { Region, Setting, IconButton } from './';
import { OPTIONS } from '../constants';

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
      this.setState({ [setting]: OPTIONS[setting].find(option => option.label === label).value });
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
            {Object.keys(OPTIONS).map(option => (
              <Setting
                key={option}
                onChange={this.changeSetting(option)}
                options={OPTIONS[option]}
                selected={this.state[option]}
                width={settingWidth}
              />
            ))}
          </Region>
          <IconButton {...this.props} name="close" onPress={this.cancel} left negative />
          <IconButton {...this.props} name="refresh" onPress={this.confirm} right positive />
        </View>
      </Modal>
    );
  }
}

SettingsModal.propTypes = {
  changeSettings: PropTypes.func,
  closeModal: PropTypes.func,
  settings: PropTypes.shape({
    grid: PropTypes.number,
    obstacles: PropTypes.bool,
    players: PropTypes.number,
    theme: PropTypes.number,
  }),
  visible: PropTypes.bool,
};
