import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

const EncabezadoG = ({abrir}) => {
    return (
        <Header searchBar style={styles.header}>
            <View style={styles.view}>
                <Icon name="menu" style={styles.color} onPress={abrir} />
            </View>
            <View style={styles.view}>
                <Text style={styles.texCab}>Fixter-Comunidad</Text>
            </View>
            <View style={styles.view}/>
        </Header>
    );
};

export default EncabezadoG;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "green",
        justifyContent: 'space-between'
    },
    view: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10
    },
    color: {
        color: "white",
        fontSize: 35
    },
    texCab:{
        color:'white',
        fontWeight:'bold',
        fontSize: 16
    }
});
