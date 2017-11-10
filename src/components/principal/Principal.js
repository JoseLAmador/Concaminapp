import React, {Component} from 'react';
import {Drawer, Container, Content} from 'native-base';
import {StatusBar} from 'react-native';
import Pie from './Pie';
import Menu from "./Menu";
import {connect} from 'react-redux';
import PostList from "./PostList";

class Principal extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
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


            <PostList />

          </Content>
          <Pie abrir={this.openDrawer}/>
        </Drawer>
      </Container>
    )
  }
}

function mapStateToProps(state) {
    return {allPosts: state.posts.allPosts}
}

export default Principal = connect(mapStateToProps)(Principal);

