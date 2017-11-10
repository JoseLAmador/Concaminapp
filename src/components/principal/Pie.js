import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Icon, Item, Input, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Pie = (props) => {
  return (
    <Header searchBar style={styles.header}>
      <View style={styles.view}>
        <Icon name="menu" style={styles.color} onPress={props.abrir}/>
      </View>
      <Item style={styles.item}>
        <Icon name="ios-search" style={styles.icon}/>
        <Input placeholder="Buscar" style={styles.input}/>
      </Item>
    </Header>
  );
};

export default Pie;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
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
    backgroundColor: 'white',
    borderRadius: 15
  },
  icon: {
    color: "#000"
  },
  input: {
    borderRadius: 50
  }
});
