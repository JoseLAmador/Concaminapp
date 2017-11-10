import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Container, Content, Left, Body, Right, ListItem, List, Icon, Card, CardItem} from 'native-base';

export default class DetalleEvento extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Content>
          <Image source={{
              uri: 'http://talent-network.org/wp-content/uploads/2017/04/Fixter-logo.png'
            }} style={styles.img}/>

          <View style={styles.view}>
            <Text style={{marginLeft: 20}}>OCT {'\n'}28</Text>
            <Text style={styles.titulo}>Desempance o que perros??</Text>
          </View>

          <List>
            <ListItem>
              <Text>Hector Bliss te invito</Text>
            </ListItem>
          </List>

          <View style={{flexDirection: 'row'}}>
            <Left>
              <Text style={{margin: 20}}>ME INTERESA</Text>
            </Left>
            <Body>
              <Text style={{margin: 20}}>ASISTIRE</Text>
            </Body>
            <Right>
              <Text style={{margin: 20}}>IGNORAR</Text>
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
                style={{height: 40, width: 40, marginLeft: 15, marginBottom: 15}}/>
              <Image source={{uri: 'https://avatars1.githubusercontent.com/u/15187254?s=460&v=4'}}
                style={{height: 40, width: 40, marginLeft: 15, marginBottom: 15}}/>
              <Image source={{uri: 'https://avatars0.githubusercontent.com/u/29002976?s=460&v=4'}}
                style={{height: 40, width: 40, marginLeft: 15, marginBottom: 15}}/>
              <Image source={{uri: 'https://avatars2.githubusercontent.com/u/6130385?s=460&v=4'}}
                style={{height: 40, width: 40, marginLeft: 15, marginBottom: 15}}/>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
                <Body>
                  <Text>Detalles</Text>
                </Body>
            </CardItem>
            <CardItem cardBody style={{marginLeft: 18, marginRight: 18}}>
              <Text>Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas, Lorem Ipsum es simplemente el texto de relleno
                de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500, cuando un impresor ....</Text>
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
  titulo: {
    fontSize: 25,
    marginRight: 80,
    marginLeft: 20
  },
  view: {
    flexDirection: 'row'
  },
  view1: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  view2: {
    margin: 20
  },
  color: {
    color: 'blue'
  },
});
