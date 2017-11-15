import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StatusBar} from 'react-native';
import Card from './Card';
import {Content} from 'native-base';
import {postFetch} from "../actions/postActions";

class PostsList extends Component {

    componentWillMount(){
        this.props.postFetch()
    }

    render(){
        const {post} = this.props;
        return(

            <Content>
                <StatusBar backgroundColor="green" barStyle="light-content"/>
                {post.reverse().map((post, index)=>{
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
    return {post}
};

export default connect (mapStateToProps, {postFetch})(PostsList);
