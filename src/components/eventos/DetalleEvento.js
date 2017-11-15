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
            <Text style={styles.textFecha}>OCT {'\n'}28</Text>
            <Text style={styles.titulo}>Desempance o que perros??</Text>
          </View>

          <List>
            <ListItem>
              <Text>Hector Bliss te invito</Text>
            </ListItem>
          </List>

          <View style={styles.view}>
            <Left>
              <Text style={styles.text}>ME INTERESA</Text>
            </Left>
            <Body>
              <Text style={styles.text}>ASISTIRE</Text>
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
          </Card>

          <Card>
            <CardItem>
                <Body>
                  <Text>Detalles</Text>
                </Body>
            </CardItem>
            <CardItem cardBody style={styles.card}>
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
    margin: 20
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
  view2: {
    margin: 20
  },
  color: {
    color: 'blue'
  },
});
