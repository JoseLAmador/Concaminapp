import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Container, Content, Left, Body, Right, ListItem, List, Icon, Card, CardItem} from 'native-base';
import Cabecera from '../header/Cabecera';

export default class DetalleEvento extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Cabecera/>
        <Content>
          <Image source={{
              uri: 'http://talent-network.org/wp-content/uploads/2017/04/Fixter-logo.png'
            }} style={styles.img}/>

          <View style={styles.view}>
            <Text style={styles.textFecha}><Text style={styles.color}>OCT</Text> {'\n'}28</Text>
            <Text style={styles.titulo}>Reunion de Fin de Año</Text>
          </View>

          <List>
            <ListItem>
              <Text style={styles.inv}>Hector Bliss te invito</Text>
            </ListItem>
          </List>

          <View style={styles.view}>
            <Left>
              <Text style={styles.text}>ME INTERESA</Text>
            </Left>
            <Body>
              <Text style={styles.text1}>ASISTIRE</Text>
            </Body>
            <Right>
              <Text style={styles.text}>IGNORAR</Text>
            </Right>
          </View>

            <List>
            <ListItem icon>
              <Left>
                <Icon name="stopwatch" />
              </Left>
              <Body>
                <Text>Sab. 28 de oct a las 8 p.m - dom 29 de oct a las 12 p.m</Text>
              </Body>
              <Right>

              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="map" />
              </Left>
              <Body>
                <Text>FIXTER HOUSE</Text>
              </Body>
              <Right/>
            </ListItem>
          </List>

          <Card>
            <CardItem>
                <Body>
                  <Text>390 asistiran - 500 interesados</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4'}}
                style={styles.img2}/>
              <Image source={{uri: 'https://avatars1.githubusercontent.com/u/15187254?s=460&v=4'}}
                style={styles.img2}/>
              <Image source={{uri: 'https://avatars0.githubusercontent.com/u/29002976?s=460&v=4'}}
                style={styles.img2}/>
              <Image source={{uri: 'https://avatars2.githubusercontent.com/u/6130385?s=460&v=4'}}
                style={styles.img2}/>
            </CardItem>

            <CardItem>
                <Body>
                  <Text style={styles.inv}>Detalles</Text>
                </Body>
            </CardItem>
            <CardItem cardBody style={styles.card}>
              <Text>Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas, Lorem Ipsum es simplemente el texto de relleno
                de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar....</Text>
            </CardItem>
          </Card>

        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  },
  img: {
    height: 200,
    width: '100%'
  },
  view: {
    flexDirection: 'row'
  },
  textFecha: {
    marginLeft: 20,
    marginTop: 10
  },
  titulo: {
    fontSize: 25,
    marginRight: 80,
    marginLeft: 20
  },
  text: {
    margin: 20,
    color: 'gray'
  },
  text1: {
    margin: 20,
    color: '#0097A7',
    fontWeight: 'bold'
  },
  img2: {
    height: 40,
    width: 40,
    marginLeft: 15,
    marginBottom: 15
  },
  card: {
    marginLeft: 18,
    marginRight: 18
  },
  color: {
    color: 'green'
  },
  inv: {
    fontWeight: 'bold'
  }
});
