import React, {Component} from 'react';
import {Text, Image,StyleSheet} from 'react-native';
import {Drawer, Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right} from 'native-base';
import Pie from './Pie';
import Menu from "./Menu";

export default class Principal extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
      <Container>
        <Drawer ref={(ref) => {
            this.drawer = ref;
        }} content={
            <Menu navigator = {
              this.navigator
            }/>
          } onClose={() => this.closeDrawer()}>
          <Content>

            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Thumbnail source={{
                      uri: 'http://talent-network.org/wp-content/uploads/2017/04/Fixter-logo.png'
                    }}/>
                  <Body>
                    <Text>Fixter</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{
                      uri: 'https://pbs.twimg.com/media/DM19m2yVoAAqynT.jpg'
                    }} style={styles.img}/>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="chatbubbles"/>
                    <Text>
                      4 Comentarios</Text>
                  </Button>
                </Left>
                <Body/>
                <Right>
                  <Text>30 minutos</Text>
                </Right>
              </CardItem>
            </Card>

            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Thumbnail source={{
                      uri: 'http://aldea.upp.edu.mx/ponente/imagenes.php?idp=31'
                    }}/>
                  <Body>
                    <Text>Oswaldo</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Ya sea que juegues solo o en modo cooperativo con amigos, League of Legends es un
                    juego muy competitivo y rápido con acción y estrategia diseñado para aquellos que
                    ansían una victoria bien merecida. #Fit&Geek
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="chatbubbles"/>
                    <Text>7 Comentarios</Text>
                  </Button>
                </Left>
                <Body/>
                <Right>
                  <Text>45 minutos</Text>
                </Right>
              </CardItem>
            </Card>

            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Thumbnail source={{
                      uri: 'http://blog.fixter.org/content/images/2017/04/bliss-1.jpg'
                    }}/>
                  <Body>
                    <Text>Hector Bliss</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{
                      uri: 'https://i.ytimg.com/vi/Q3YeO1tufb4/maxresdefault.jpg'
                    }} style={styles.img}/>
                  <Text>
                    Aprovecha está gran oportunidad!, inscríbete hoy y obtén el descuento del 20%
                    ---> www.fixter.camp
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="chatbubbles"/>
                    <Text>12 Comentarios</Text>
                  </Button>
                </Left>
                <Body/>
                <Right>
                  <Text>1 hora</Text>
                </Right>
              </CardItem>
            </Card>

          </Content>
          <Pie/>
        </Drawer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: '100%',
    flex: 1
  },
  texto: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'flex-end'
  },
  card: {
    flex: 0
  }
});
