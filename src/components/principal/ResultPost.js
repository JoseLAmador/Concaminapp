import React from 'react';
import Card from './Card';
import {StatusBar} from 'react-native';
import {Content} from 'native-base';

export const ResultPost = ({results}) => {
  return (
    <Content>
    <StatusBar backgroundColor="green" barStyle="light-content"/> {
      results.map((post, index) => <Card key = {
        index
      }
      post = {
        post
      } />)
    }
  </Content>
  );
};
