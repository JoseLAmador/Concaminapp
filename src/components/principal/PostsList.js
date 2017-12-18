import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StatusBar, View, Text} from 'react-native';
import Card from './Card';
import {Content, Spinner} from 'native-base';
import {postFetch} from '../actions/postActions';

class PostsList extends Component {
  componentWillMount(){
    this.props.postFetch()
  }
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

    render(){
        const {post} = this.props;
        let filtrados = post.filter(f=>{return !f.group && !f.organization});
        return(

            <Content>
                <StatusBar backgroundColor="#0097A7" barStyle="light-content"/>
                {this.fetched()}
                {filtrados.reverse().map((post, index)=>{
                    return <Card
                        key={index}
                        index={index}
                        post={post}
                    />
                })}
            </Content>

        );
    };
};

const mapStateToProps = state =>{
    const post = _.map(state.post, (val,uid)=>{
        return {...val, uid};
    });
    return {post, fetched: post.length > 0}
};

export default connect (mapStateToProps, {postFetch})(PostsList);
