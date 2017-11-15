import React from 'react';
import Card from './Card';
import {StatusBar} from 'react-native';
import {Content} from 'native-base';

export const ResultPost = ({results}) => {
  return (
    <Content>
    <StatusBar backgroundColor="green" barStyle="light-content"/>
        {results.reverse().map((post, index)=>{
            return <Card
                key={index}
                index={index}
                post={post}
            />
        })}
  </Content>
  );
};
