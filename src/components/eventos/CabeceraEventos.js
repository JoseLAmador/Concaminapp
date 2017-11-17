import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Header, Left, Icon, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class CabeceraEventos extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' style={styles.color}/>
          </TouchableOpacity>
        </Left>
        <Body>
          <Text style={styles.texCab}>Tus eventos</Text>
        </Body>
        <Right/>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0097A7"
  },
  color: {
    color: "white"
  },
  texCab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
