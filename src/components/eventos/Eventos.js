import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Container, Content, List, ListItem, Title, Card, Fab, Icon, Button} from 'native-base';
import Cabecera from '../header/Cabecera';
import {Actions} from 'react-native-router-flux';

export default class Eventos extends Component {
  render() {
    return (
      <Container>
      <Cabecera/>
      <Content style={styles.back}>

        <Title style={styles.title}>Tus proximos eventos</Title>
        <List>
          <Card>
            <ListItem onPress={() => Actions.DetalleEvento()}>
              <Text>31 Oct{'\n'}mar</Text>
              <Text style={styles.text}>Vamonos al Cine Perros{'\n'}31 oct - 2 nov</Text>
              <Text style={styles.text2}>AHORA</Text>
            </ListItem>
            <View style={styles.view}>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ME INTERESA</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ASISTIRE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>IGNORAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card>
            <ListItem>
              <Text>31 Oct{'\n'}mar</Text>
              <Text style={styles.text}>Vamonos al Cine Perros{'\n'}31 oct - 2 nov</Text>
              <Text style={styles.text2}>AHORA</Text>
            </ListItem>
            <View style={styles.view}>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ME INTERESA</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ASISTIRE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>IGNORAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card>
            <ListItem>
              <Text>31 Oct{'\n'}mar</Text>
              <Text style={styles.text}>Vamonos al Cine Perros{'\n'}31 oct - 2 nov</Text>
              <Text style={styles.text2}>AHORA</Text>
            </ListItem>
            <View style={styles.view}>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ME INTERESA</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ASISTIRE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>IGNORAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card>
            <ListItem>
              <Text>31 Oct{'\n'}mar</Text>
              <Text style={styles.text}>Vamonos al Cine Perros{'\n'}31 oct - 2 nov</Text>
              <Text style={styles.text2}>AHORA</Text>
            </ListItem>
            <View style={styles.view}>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ME INTERESA</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ASISTIRE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>IGNORAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card>
            <ListItem>
              <Text>31 Oct{'\n'}mar</Text>
              <Text style={styles.text}>Vamonos al Cine Perros{'\n'}31 oct - 2 nov</Text>
              <Text style={styles.text2}>AHORA</Text>
            </ListItem>
            <View style={styles.view}>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ME INTERESA</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ASISTIRE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>IGNORAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          <Card>
            <ListItem>
              <Text>31 Oct{'\n'}mar</Text>
              <Text style={styles.text}>Vamonos al Cine Perros{'\n'}31 oct - 2 nov</Text>
              <Text style={styles.text2}>AHORA</Text>
            </ListItem>
            <View style={styles.view}>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ME INTERESA</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>ASISTIRE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity>
                  <Text style={styles.color}>IGNORAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </List>

      </Content>

      <Fab direction="up" style={styles.fab} position="bottomRight" onPress={() => Actions.NuevoEvento()}>
        <Icon name="add"/>
      </Fab>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  },
  title: {
    margin: 10
  },
  text: {
    marginLeft: 25
  },
  text2: {
    marginLeft: 20
  },
  view: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  view2: {
    margin: 20
  },
  color: {
    color: 'blue'
  },
  fab: {
    backgroundColor: 'blue'
  }
});
