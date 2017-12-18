import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right} from 'native-base';

export const Cardd = ({post}) => {
  const {image, text, user} = post;

  return (
    <TouchableOpacity>
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail source={{
                uri: "https://i.ytimg.com/vi/vHJPW8zo0og/hqdefault.jpg"
              }}/>
            <Body>
              <Text>{user}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
            <Image source={{
                uri: image
              }} style={styles.img} resizeMode={'contain'}/>
        </CardItem>
        <CardItem>
          <Text>
              {text}
          </Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="chatbubbles" style={styles.icon}/>
              <Text>
                2 Comentarios</Text>
            </Button>
          </Left>
          <Body/>
          <Right>
            <Text>35 minutos</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default Cardd;

const styles = StyleSheet.create({
  img: {
    minHeight: 200,
      maxHeight: 200,
    width: '100%',
    flex: 1,
  },
  card: {
    flex: 0
  },
  icon: {
    color: 'green',
    margin: 5
  }
});
