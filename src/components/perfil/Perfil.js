import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Content, Button, Thumbnail, H1, Card, Icon, Title, Left, Right, Body, CardItem, Header} from 'native-base';
import img2 from '../../assets/imgs/usuario.jpeg';
import img from '../../assets/imgs/fondo.jpg';
import {Actions} from 'react-native-router-flux';
import img3 from '../../assets/imgs/mr.jpg';
import Cabecera from '../header/Cabecera';

export default class Perfil extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Cabecera/>
      <Content>
        <Image source={img} style={styles.img}/>
          <View style={styles.view}>
            <View style={styles.view}>
              <Thumbnail source={img2} style={styles.thub}/>
            </View>
            <H1 style={styles.h1}>Saul Sandoval M</H1>
            <Text style={styles.text}>sauldevelop@gmail.com</Text>
            <View>
            <Text style={styles.texto}>Hello World! Soy Saúl, fan de las películas y los videojuegos,
              idealista, hacker, y este es mi hogar</Text>
          </View>
          </View>

          <View style={styles.view2}>
            <Card>
              <Text style={styles.texto}>0{'\n'}<Text>Quien ha visitado tu perfil</Text></Text>
            </Card>
            <Card>
              <Text style={styles.texto}>0{'\n'}<Text>Visualizaciones de publicaciones</Text></Text>
            </Card>
            <Card>
              <Text style={styles.texto}>0{'\n'}<Text>Apariciones en busquedas</Text></Text>
            </Card>
          </View>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Saul Sandoval M</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={img3} style={styles.img2}/>
                <Text>
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                  cuando un impresor (N. del T. persona que se dedica a la imprenta).
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Me Gusta</Text>
                </Button>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Comentarios</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Saul Sandoval M</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={img3} style={styles.img2}/>
                <Text>
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                  cuando un impresor (N. del T. persona que se dedica a la imprenta).
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Me Gusta</Text>
                </Button>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Comentarios</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Saul Sandoval M</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={img3} style={styles.img2}/>
                <Text>
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                  cuando un impresor (N. del T. persona que se dedica a la imprenta).
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Me Gusta</Text>
                </Button>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Comentarios</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Saul Sandoval M</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={img3} style={styles.img2}/>
                <Text>
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                  cuando un impresor (N. del T. persona que se dedica a la imprenta).
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Me Gusta</Text>
                </Button>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Comentarios</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Saul Sandoval M</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={img3} style={styles.img2}/>
                <Text>
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                  cuando un impresor (N. del T. persona que se dedica a la imprenta).
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Me Gusta</Text>
                </Button>
                <Button transparent textStyle={styles.color}>
                  <Icon name="heart" />
                  <Text>Comentarios</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  thub: {
    margin: 10,
    height: 100,
    width: 100
  },
  h1: {
    marginLeft: 20,
    color: 'black',
    alignSelf: 'center'
  },
  text: {
    marginLeft: 20,
    color: 'black',
    alignSelf: 'center'
  },
  img: {
    flex: 2,
    height: 200,
    width: null,
    opacity: 15
  },
  container: {
    backgroundColor: 'white'
  },
  view: {
    alignSelf: 'center',
    marginTop: -30
  },
  orden: {
    alignSelf: 'center',
    margin: 20,
    fontSize: 20
  },
  view2: {
    flexDirection: 'row'
  },
  texto: {
    margin: 10
  },
  img2: {
    height: 200, width: '100%'
  },
  color: {
    color: '#87838B'
  }
});
