import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Icon, Item, Input} from 'native-base';

const Pie = ({onSearch, abrir}) => {
  return (
    <Header searchBar style={styles.header}>
      <View style={styles.view}>
        <Icon name="menu" style={styles.color} onPress={abrir} />
      </View>
      <Item style={styles.item}>
        <Icon name="ios-search" style={styles.icon}/>
        <Input onChangeText={onSearch} placeholder="Buscar" style={styles.input}/>
      </Item>
    </Header>
  );
};

export default Pie;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0097A7",
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
