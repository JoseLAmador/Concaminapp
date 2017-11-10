import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Icon, Item, Input, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

const PieS = (props) => {
  return (
    <Header searchBar style={styles.header}>
      <View style={styles.view}>
        <Icon name="menu" style={styles.color} onPress={() => Actions.Grupos()}/>
      </View>
      <View style={styles.view}>
        <Text>CONCAMIN APP</Text>
      </View>
      <View style={styles.view}/>
    </Header>
  );
};

export default PieS;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e8e8e8",
    justifyContent: 'space-between'
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10
  },
  color: {
    color: "white",
    fontSize: 35
  },
  item: {
    alignSelf: 'center'
  },
  icon: {
    color: "#000"
  },
  input: {
    borderRadius: 50
  }
});
