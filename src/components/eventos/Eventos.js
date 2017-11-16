import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Container, Content, List, ListItem, Title, Card, Fab, Icon} from 'native-base';
import CabeceraEventos from './CabeceraEventos';
import {Actions} from 'react-native-router-flux';

export default class Eventos extends Component {
  render() {
    return (
      <Container>
        <CabeceraEventos/>
        <Content>

          <List>
            <Card>
              <ListItem onPress={() => Actions.DetalleEvento()} style={styles.flex}>
                <View style={styles.view3}>
                  <Text>
                    <Text style={styles.negritas}>17 Nov</Text>{'\n'}vie</Text>
                </View>
                <View style={styles.view4}>
                  <Text style={styles.text}>
                    <Text style={styles.negritas}>Entrega de la App</Text>{'\n'}17 nov</Text>
                </View>
                <Text>
                  <Text style={styles.status2}>AHORA</Text>
                </Text>
              </ListItem>
              <View style={styles.view}>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>ME INTERESA</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity style={styles.flex}>
                    <Text style={styles.color}>ASISTIRE</Text>
                    <Icon name="ios-checkmark" style={{marginTop: -8, marginLeft: 2}}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>IGNORAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card>
              <ListItem onPress={() => Actions.DetalleEvento()} style={styles.flex}>
                <View style={styles.view3}>
                  <Text>
                    <Text style={styles.negritas}>20 Nov</Text>{'\n'}mar</Text>
                </View>
                <View style={styles.view4}>
                  <Text style={styles.text}>
                    <Text style={styles.negritas}>Cumpleaños de Brenda</Text>{'\n'}20 nov</Text>
                </View>
                <Text>
                  <Text style={styles.status1}>EN 3 DIAS</Text>
                </Text>
              </ListItem>
              <View style={styles.view}>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>ME INTERESA</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity style={styles.flex}>
                    <Text style={styles.color}>ASISTIRE</Text>
                    <Icon name="ios-checkmark" style={{marginTop: -8, marginLeft: 2}}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>IGNORAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card>
              <ListItem onPress={() => Actions.DetalleEvento()} style={styles.flex}>
                <View style={styles.view3}>
                  <Text>
                    <Text style={styles.negritas}>28 Dic</Text>{'\n'}jue</Text>
                </View>
                <View style={styles.view4}>
                  <Text style={styles.text}>
                    <Text style={styles.negritas}>Reunion de Fin de Año</Text>{'\n'}28 dic - 29 dic</Text>
                </View>
                <Text>
                  <Text style={styles.status1}>EN 41 DIAS</Text>
                </Text>
              </ListItem>
              <View style={styles.view}>
                <View style={styles.view2}>
                  <TouchableOpacity style={styles.flex}>
                    <Text style={styles.color}>ME INTERESA</Text>
                    <Icon name="ios-checkmark" style={{marginTop: -8, marginLeft: 2}}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>ASISTIRE</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>IGNORAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card>
              <ListItem onPress={() => Actions.DetalleEvento()} style={styles.flex}>
                <View style={styles.view3}>
                  <Text>
                    <Text style={styles.negritas}>20 Ene</Text>{'\n'}sab</Text>
                </View>
                <View style={styles.view4}>
                  <Text style={styles.text}>
                    <Text style={styles.negritas}>Conferencia</Text>{'\n'}20 ene</Text>
                </View>
                <Text>
                  <Text style={styles.status1}>EN 64 DIAS</Text>
                </Text>
              </ListItem>
              <View style={styles.view}>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>ME INTERESA</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>ASISTIRE</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity style={styles.flex}>
                    <Text style={styles.color}>IGNORAR</Text>
                    <Icon name="ios-checkmark" style={{marginTop: -8, marginLeft: 2}}/>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card>
              <ListItem onPress={() => Actions.DetalleEvento()} style={styles.flex}>
                <View style={styles.view3}>
                  <Text>
                    <Text style={styles.negritas}>25 Feb</Text>{'\n'}dom</Text>
                </View>
                <View style={styles.view4}>
                  <Text style={styles.text}>
                    <Text style={styles.negritas}>Viaje de Trabajo</Text>{'\n'}25 feb</Text>
                </View>
                <Text>
                  <Text style={styles.status1}>EN 100 DIAS</Text>
                </Text>
              </ListItem>
              <View style={styles.view}>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>ME INTERESA</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity style={styles.flex}>
                    <Text style={styles.color}>ASISTIRE</Text>
                    <Icon name="ios-checkmark" style={{marginTop: -8, marginLeft: 2}}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text style={styles.color2}>IGNORAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card>
              <ListItem onPress={() => Actions.DetalleEvento()} style={styles.flex}>
                <View style={styles.view3}>
                  <Text>
                    <Text style={styles.negritas}>6 Mar</Text>{'\n'}mar</Text>
                </View>
                <View style={styles.view4}>
                  <Text style={styles.text}>
                    <Text style={styles.negritas}>Entrega de Proyectos</Text>{'\n'}6 mar</Text>
                </View>
                <Text>
                  <Text style={styles.status1}>EN 128 DIAS</Text>
                </Text>
              </ListItem>
              <View style={styles.view}>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text>ME INTERESA</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text>ASISTIRE</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                  <TouchableOpacity>
                    <Text>IGNORAR</Text>
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
    margin: 10,
    color: 'black'
  },
  text: {
    marginLeft: 25
  },
  view: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  view2: {
    margin: 20
  },
  view3: {
    marginLeft: 5
  },
  view4: {
    width: 210
  },
  color: {
    color: 'green',
    fontWeight: 'bold'
  },
  fab: {
    backgroundColor: 'green'
  },
  back: {
    backgroundColor: 'green'
  },
  negritas: {
    fontWeight: 'bold'
  },
  status1: {
    color: 'blue',
    fontWeight: 'bold'
  },
  status2: {
    color: 'red',
    fontWeight: 'bold'
  },
  color2: {
    color: 'gray'
  },
  flex: {
    flexDirection: 'row'
  },

});
