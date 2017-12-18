import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Container, Content, Input, Button, List, ListItem, CheckBox, Right, Icon, Left, Body} from 'native-base';
import img2 from '../../assets/imgs/usuario.jpeg';
import Cabecera from '../header/Cabecera';
import img from '../../assets/imgs/fondo.jpg';
import {Actions} from 'react-native-router-flux';
import img3 from '../../assets/imgs/mr.jpg';

export default class NuevoEvento extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Cabecera/>
      <Content style={styles.back}>
        <StatusBar backgroundColor="#0097A7" barStyle="light-content"/>
        <Image source={{
            uri: 'https://raw.githubusercontent.com/SaulSandovalM/Kopi/master/app/src/main/res/drawable/add_btn.png'
          }} style={styles.img}/>

        <Input
          name="Nombre"
          placeholder='Nombre del evento'
          placeholderTextColor='black'
          returnKeyType='next'/>

        <List>
          <ListItem>
            <Left>
              <Icon name='calendar'/>
              <Text style={styles.text}>Fecha</Text>
            </Left>
            <Right/>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name='map'/>
              <Text style={styles.text}>Ubicacion</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name='brush'/>
              <Text style={styles.text}>Detalles</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name='person'/>
              <Text style={styles.text}>Los invitados pueden invitar amigos</Text>
            </Left>
            <Right>
            <CheckBox checked={true}/>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name='person'/>
              <Text style={styles.text}>Otros Organizadores</Text>
            </Left>
          </ListItem>
        </List>

      </Content>
      <Button block style={styles.button} onPress={() => Actions.Eventos()}><Text>CREAR</Text></Button>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  },
  text: {
    marginLeft: 10
  },
  img: {
    height: 200,
    width: '100%'
  },
  button: {
    width: '100%',
    backgroundColor: '#0097A7'
  }
});
