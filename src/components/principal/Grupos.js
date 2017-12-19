import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import {Container, Content, CardItem, Right, Button, Body, Left, Icon, Thumbnail, Drawer, List, ListItem, Input, Spinner} from 'native-base';
import Pie from './Pie';
import {Actions} from 'react-native-router-flux';
import Menu from './Menu';
import img from '../../assets/imgs/usuario.jpeg';
import {postFetch} from '../actions/postActions';
import {connect} from 'react-redux';
import Card from './Card';
import EncabezadoG from './EncabezadoG';

class Grupos extends Component {
    componentWillMount(){
        this.props.postFetch()
    }
  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };
    fetched(){
        if(!this.props.fetched){
            return (
                <View>
                  <Spinner color={"#0097A7"}/>
                  <Text style={{alignSelf:'center'}} >Cargando...</Text>
                </View>
            )
        }
    }

  render() {
    const {post} = this.props;
      let filtrados = post.filter(f=>{return f.organization});
    return (
      <Container>
        <Drawer ref={(ref) => {
            this.drawer = ref;
          }} content={
              <Menu navigator = {
                  this.navigator
              } />
            } onClose={() => this.closeDrawer()}>

          <EncabezadoG abrir={this.openDrawer}/>
          <Content>
            <StatusBar backgroundColor="#0097A7" barStyle="light-content"/>
            <CardItem cardBody>
              <ImageBackground source={{
                  uri: 'https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/17342748_1510316442365523_2486792964622413805_n.png?oh=c028b71ecaf441dcd46455d0937f6cb7&oe=5ACA0BAC'
              }} style={styles.img}></ImageBackground>
            </CardItem>
            <View style={styles.miembros}>

              <View style={styles.vnew}>
                <Icon name="md-checkmark" style={styles.iconC}/>
                <Text>Miembro</Text>
              </View>

              <View style={styles.vnew}>
                <Icon name="ios-people" style={styles.icons}/>
                <Text>Agregar Miembro</Text>
              </View>

              <View style={styles.vnew}>
                <Icon name="ios-calendar" style={styles.icons} onPress={() => Actions.NuevoEvento()}/>
                <Text>Crear Evento</Text>
              </View>
            </View>
              {this.fetched()}

              {/*<View>
            <Card style={styles.post}>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{
                      uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4'
                    }} />
                </Left>
                <Body>
                  <Input placeholder="Escribe algo.."/>
                </Body>
                <Right>
                  <Icon name="md-more"/>
                </Right>
              </ListItem>
            </Card>
          </View>*/}

              {
                  filtrados.reverse().map((post, index) => {
                      return <Card key={index} index={index} post={post}/>
                  })
              }

          </Content>
        </Drawer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const post = _.map(state.post, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  return {post, fetched: post.length > 0}
};

export default connect(mapStateToProps, {postFetch})(Grupos);

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: null,
    flex: 1
  },
  texto: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'flex-end'
  },
  card: {
    flex: 0
  },
  post: {
    height: 80,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  miembros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2
  },
  vnew: {
    flexDirection: 'column',
    alignSelf: 'center'
  },
  iconC: {
    color: '#ccc',
    fontSize: 34,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  icons: {
    color: '#ccc',
    fontSize: 34,
    alignSelf: 'center'
  }

});
