import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right} from 'native-base';

export const Cardd = ({post}) => {
  const {image, text, username, user_photo} = post;
  let nImage = image;
  if (nImage ===null || nImage ===undefined || nImage ===''){
    nImage="http://www.visionindustrial.com.mx//wp-content/uploads/336d6e45001c603052accd6de4c50b60.jpg"
  }else{nImage=image}

  return (
    <TouchableOpacity>
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail small source={{
                uri: user_photo
              }}/>
            <Body>
              <Text style={{fontWeight:'bold', color:'black', fontSize:16}}>{username}</Text>
              <Text style={{fontSize:12}}>20 de diciembre</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
            <Image source={{
                uri: nImage
              }} style={styles.img} resizeMode={'contain'}/>
        </CardItem>
        <CardItem>
          <Text>
              {text}
          </Text>
        </CardItem>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
              <Icon active name="chatbubbles" style={styles.icon}/>
              <Text style={{marginBottom:10}}>
                2 Comentarios</Text>
        </View>

      </Card>
    </TouchableOpacity>
  );
};

export default Cardd;

const styles = StyleSheet.create({
  img: {
    minHeight: 100,
    width: '100%',
    flex: 1,
  },
  card: {
    flex: 0
  },
  icon: {
    color: "#0097A7",
    paddingLeft: 17,
      paddingRight:5,
      marginBottom:10,
      fontSize:15
  }
});
