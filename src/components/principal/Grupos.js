import React, { Component } from 'react';
import {Text, Image,View, ImageBackground} from 'react-native';
import { Container, Content, Card, CardItem, Right, Button, Body, Left, Icon, Thumbnail } from 'native-base';
import PieS from "./PieS";

export default class Grupos extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground source={{uri: 'https://cdn-images-1.medium.com/max/2000/1*H-gZIJOuBUucvXS4xMZ1mg.jpeg'}} style={{height: 130, width: '100%'}}>
                            <Text>Ver perfil</Text>
                    </ImageBackground>
                    <CardItem>
                        <Left>
                            <Button transparent >
                                <Text>Miembro</Text>
                            </Button>
                        </Left>
                        <Body>
                        <Button transparent >
                            <Text>Agregar Miembro</Text>
                        </Button>
                        </Body>
                        <Right>
                            <Button transparent >
                                <Text>Crear Evento</Text>
                            </Button>
                        </Right>
                    </CardItem>

                    <View>
                        <Card>
                            <Text>Publicar</Text>
                        </Card>
                    </View>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://www.fixter.camp/static/assets/fotos/martin1-01.png'}} />
                                <Body>
                                <Text>Martin</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image source={{uri: 'https://pbs.twimg.com/profile_images/558890605980712960/Rpzl_hli.jpeg'}} style={{height: 200, width: '100%', flex: 1}}/>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text> 4 Comentarios</Text>
                                </Button>
                            </Left>
                            <Body />
                            <Right>
                                <Text>30 minutos</Text>
                            </Right>
                        </CardItem>
                    </Card>

                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://www.fixter.camp/static/assets/fotos/david2-01.png'}} />
                                <Body>
                                <Text>David</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                Bendita sea la tuerca del rin del eje de la llanta de la caja del camión que trajo el cemento para hacer la banqueta donde estás parada monumento
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text> 7 Comentarios</Text>
                                </Button>
                            </Left>
                            <Body />
                            <Right>
                                <Text>45 minutos</Text>
                            </Right>
                        </CardItem>
                    </Card>

                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://www.fixter.camp/static/assets/fotos/saul1-01.png'}} />
                                <Body>
                                <Text>Sául</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2bT7rMBGehbLtY4gsJ_uAbZRdqe5BHUFuRjsKTidWzJU5Sq44nu9BRXKSdQ'}} style={{height: 200, width: '100%', flex: 1}}/>
                            <Text>
                                Daré por hecho que ya tienes instalado React Native junto con todas las herramientas de las que hablamos en ese post, y que además ya creaste el proyecto "FixterGeek"
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text> 12 Comentarios</Text>
                                </Button>
                            </Left>
                            <Body />
                            <Right>
                                <Text>1 hora</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
                <PieS/>
            </Container>
        );
    }
}