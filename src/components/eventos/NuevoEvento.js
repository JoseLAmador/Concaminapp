import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
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
        <Input
          name="Nombre"
          placeholder='Nombre del evento'
          placeholderTextColor='black'
          returnKeyType='next'/>

        <List>
          <ListItem>
            <Left>
              <Icon name='calendar'/>
              <Text style={{marginLeft: 10}}>Fecha</Text>
            </Left>
            <Right/>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name='map'/>
              <Text style={{marginLeft: 10}}>Ubicacion</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name='person'/>
              <Text style={{marginLeft: 10}}>Detalles</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name='person'/>
              <Text style={{marginLeft: 10}}>Los invitados pueden invitar amigos</Text>
            </Left>
            <Right>
            <CheckBox checked={true}/>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name='person'/>
              <Text style={{marginLeft: 10}}>Otros Organizadores</Text>
            </Left>
          </ListItem>
        </List>

      </Content>
      <Button block style={{width: '100%'}} onPress={() => Actions.Eventos()}><Text>CREAR</Text></Button>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  }
});
