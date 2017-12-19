import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, ImageBackground, View} from 'react-native';
import {List, ListItem, Left, Body, Right, Icon, Content, Container, Badge, CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import firebase from '../firebase/Firebase'

export default class Menu extends Component {
    signOut=()=>{
        firebase.auth().signOut();
    };
  render(){
    return(
      <Container style={styles.menu}>
        <View style={styles.viewImage}>
          <ImageBackground source={{
              uri: 'https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/11011631_882175995175817_2682208415031668395_n.png?oh=f0359842e9eebb0ed898104e1050c6da&oe=5ACEDE36'
          }} style={styles.img} resizeMode={'contain'}
          >
          </ImageBackground>
        </View>
        <Content>

          <TouchableOpacity style={styles.usuarioImagen} onPress={() => Actions.Perfil()}>
            <Image style={styles.usuario} source={{
                uri:'https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/15781332_1418375021559666_5183319178188037875_n.png?oh=e732f1565f70495dcdfb632f4ae167df&oe=5ABAE1AE'}}/>
            <Text style={styles.text}>Fixter</Text>
          </TouchableOpacity>

          <List>
            <ListItem itemDivider>
              <Text>FAVORITOS</Text>
            </ListItem>
            <ListItem icon onPress={()=> Actions.Principal()}>
              <Left>
                <Icon name="ios-book" style={styles.iconColor}/>
              </Left>
              <Body>
                <Text>Más recientes</Text>
              </Body>
              <Right>
                  <Text>12</Text>
              </Right>
            </ListItem>
            <ListItem icon onPress={() => Actions.Eventos()}>
              <Left>
                <Icon name="ios-calendar" style={styles.iconColor}/>
              </Left>
              <Body>
                <Text>Eventos</Text>
              </Body>
              <Right>
                  <Text>2</Text>
              </Right>
            </ListItem>
            <ListItem icon >
              <Left>
                <Icon name="person" style={styles.iconColor}/>
              </Left>
              <Body>
                <Text>Amigos</Text>
              </Body>
              <Right/>
            </ListItem>
          </List>

          <List>
            <ListItem itemDivider>
              <Text>GRUPOS</Text>
            </ListItem>
            <ListItem icon onPress={()=>Actions.Grupos()}>
              <Left>
                <Icon name="bulb" style={styles.iconColor}/>
              </Left>
              <Body>
                <Text>Fixter-Comunidad</Text>
              </Body>
              <Right>
                  <Text>2</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-microphone" style={styles.iconColor} />
              </Left>
              <Body>
                <Text>VectorBr</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="pizza" style={styles.iconColor} />
              </Left>
              <Body>
                <Text>Lol-Pachuca</Text>
              </Body>
              <Right>
                  <Text>12</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="nutrition" style={styles.iconColor}/>
              </Left>
              <Body>
                <Text>Fit&Geek</Text>
              </Body>
              <Right>
                  <Text>1</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="beer" style={styles.iconColor}/>
              </Left>
              <Body>
                <Text>MarioKart</Text>
              </Body>
              <Right>
                  <Text>22</Text>
              </Right>
            </ListItem>
            <ListItem onPress={()=>this.signOut()} >
              <Text>Cerrar Sesión</Text>
            </ListItem>
        </List>
      </Content>
    </Container>
    );
  };
};

const styles = StyleSheet.create({
    img: {
        width: '100%',
        flex: 1,
        alignSelf:'center',

    },
  usuario: {
    width: 60,
    height: 60,
    margin: 20,
      borderRadius:10

  },
  usuarioImagen: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    color: 'black',
      fontWeight:'bold'
  },
  badge: {
    justifyContent:'center',
    alignItems:'center',


  },
    menu:{
      backgroundColor:'white'
    },
    iconColor:{
      color:'#ccc',
    },
    viewImage:{
        minHeight:135,
        width:'100%'
    },
    viewBadge:{
        backgroundColor:'green',
        borderRadius:50,
        padding:4,
        height:25,
        width:25,
        justifyContent:'center',
        alignItems:'center',
    }

});
