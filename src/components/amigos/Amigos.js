import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Header, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Perfil extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right/>
        </Header>
      <Content>

        <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>

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
});
