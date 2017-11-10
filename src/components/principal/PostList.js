import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Cardd from './Card';
import {Content} from 'native-base';
import {StatusBar} from 'react-native';

class PostList extends Component {
    state={
        allPosts:[]
    };

    componentWillMount(){
        const {allPosts} = this.props;
        this.setState({allPosts});
    };

    render(){
        const {allPosts} = this.state;
        return(

            <Content>
                <StatusBar backgroundColor="green" barStyle="light-content"/>
                {allPosts.map((p, index)=>{
                    return <Cardd
                        key={index}
                        index={index}
                        p={p}
                    />
                })}
            </Content>

        );
    };
};

function mapStateToProps(state, ownProps) {
    return {allPosts: state.posts.allPosts};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(dispatch)};
}

export default PostList = connect(mapStateToProps, mapDispatchToProps)(PostList);