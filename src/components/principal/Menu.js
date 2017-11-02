import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import img2 from '../../assets/imgs/nouser.png';
import {List, ListItem, Left, Body, Right, Button, Icon, Content, Container, Switch, Badge} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Menu extends Component {
    render(){
        return(
            <Content style={styles.menu}>
                <Container>
                    <ImageBackground source={{uri: 'http://pcshouters.com/wp-content/uploads/2017/01/Advancement-in-Technology-800x480.jpg'}} style={{height: 130, width: '100%'}}>
                        <TouchableOpacity style={styles.usuarioImagen} onPress={() => Actions.Login()}>
                            <Image style={styles.usuario} source={{uri:'http://images.eonline.com/eol_images/Entire_Site/2017229//rs_600x600-170329085414-600.Cristiano-Ronaldo.cm.32917.jpg'}}/>
                            <Text style={styles.text}>Ver perfil</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                    <Text>FAVORITOS</Text>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-book" />
                            </Left>
                            <Body>
                            <Text>Más recientes</Text>
                            </Body>
                            <Right>
                                <Badge success style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text>12</Text>
                                </Badge>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-calendar" />
                            </Left>
                            <Body>
                            <Text>Eventos</Text>
                            </Body>
                            <Right>
                                <Badge success style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text>2</Text>
                                </Badge>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="person" />
                            </Left>
                            <Body>
                            <Text>Amigos</Text>
                            </Body>
                            <Right />
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-disc" />
                            </Left>
                            <Body>
                            <Text>Guardado</Text>
                            </Body>
                            <Right />
                        </ListItem>
                    </List>

                    <Text>GRUPOS</Text>
                    <List>
                        <ListItem icon onPress={()=>Actions.Grupos()}>
                            <Left>
                                <Icon name="bulb" />
                            </Left>
                            <Body>
                            <Text>Fixter-Comunidad</Text>
                            </Body>
                            <Right>
                                <Badge success style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text>2</Text>
                                </Badge>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-microphone" />
                            </Left>
                            <Body>
                            <Text>VectorBr</Text>
                            </Body>
                            <Right />
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="pizza" />
                            </Left>
                            <Body>
                            <Text>Lol-Pachuca</Text>
                            </Body>
                            <Right>
                                <Badge success style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text>12</Text>
                                </Badge>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="nutrition" />
                            </Left>
                            <Body>
                            <Text>Fit&Geek</Text>
                            </Body>
                            <Right>
                                <Badge success style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text>1</Text>
                                </Badge>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="beer" />
                            </Left>
                            <Body>
                            <Text>MarioKart</Text>
                            </Body>
                            <Right>
                                <Badge success style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text>22</Text>
                                </Badge>
                            </Right>
                        </ListItem>
                    </List>

                </Container>
            </Content>
        );
    };
};

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        backgroundColor: 'white'
    },
    usuario: {
        width: 60,
        height: 60,
        margin: 20,
        marginTop: 30
    },
    usuarioImagen: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        color: 'white'
    },

});