import React, {Component} from 'react';
import {Drawer, Container, Content} from 'native-base';
import {StatusBar} from 'react-native';
import Pie from './Pie';
import Menu from "./Menu";
import {connect} from 'react-redux';
import _ from "lodash";
import {postFetch} from "../actions/postActions";
import Cardd from "./Card";

class Principal extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  componentWillMount(){
    this.props.postFetch()
  }
  render() {
    const {post}=this.props;
    return (
      <Container>
        <Drawer ref={(ref) => {
            this.drawer = ref;
        }} content={
            <Menu navigator = {
              this.navigator
            }/>
          } onClose={() => this.closeDrawer()}>
          <Content>
            <StatusBar backgroundColor="green" barStyle="light-content"/>


              {post.map((post,index)=>
                  <Cardd
                      key={index}
                      post={post}
                  />
              )}

          </Content>
          <Pie abrir={this.openDrawer}/>
        </Drawer>
      </Container>
    )
  }
}

const mapStateToProps = state =>{
  const post = _.map(state.post, (val,uid)=>{
    return {...val, uid};
  });
  return {post}
};

export default connect (mapStateToProps, {postFetch})(Principal);

