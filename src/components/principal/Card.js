import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {Drawer, Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right} from 'native-base';

export const Cardd = ({
                          post
                      }) => {

    const {userImage,
        autor,
        tiempo,
        comentarios,
        imagen,
        postito,
    } = post;

    return (
        <TouchableOpacity>
            <Card style={styles.card}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{
                            uri: userImage
                        }}/>
                        <Body>
                        <Text>{autor}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                    <Image source={{
                        uri: imagen
                    }} style={styles.img}/>
                    <Text>
                        {postito}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="chatbubbles" style={styles.icon}/>
                            <Text> {comentarios} Comentarios</Text>
                        </Button>
                    </Left>
                    <Body/>
                    <Right>
                        <Text>{tiempo} minutos</Text>
                    </Right>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
};

export default Cardd;

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
    },
    icon:{
        color:'green'
    },
});