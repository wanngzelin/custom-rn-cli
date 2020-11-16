import React, { Component } from 'react';
import { ActivityIndicator, Modal, View, StyleSheet } from 'react-native';

class Loaading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  show = () => {
    this.setState({ visible: true })
  }
  hide = () => {
    this.setState({ visible: false })
  }
  render() {
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.state.visible}
      >
        <View style={styles.main}>
          <ActivityIndicator size='large' color='red' />
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Loaading;
