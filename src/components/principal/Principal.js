import React, {Component} from 'react';
import {Drawer, Container, Content} from 'native-base';
import Pie from './Pie';
import Menu from "./Menu";
import {connect} from 'react-redux';
import _ from "lodash";
import {postFetch} from "../actions/postActions";
import {setSearch} from "../actions/filterActions";
import {ResultPost} from "./ResultPost";
import PostsList from "./PostsList";

class Principal extends Component {

  constructor(props){
    super(props);
    this.state={
      results: []
    }
  }
    onSearch = (value) => {
        this.props.setSearch(value);
        let results = this.props.post;
        const rEx = new RegExp(value, 'i');
        results = results.filter(post => rEx.test(post.text));
        this.setState({results})
    };
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
    const {search}=this.props;
    const {results}=this.state;
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

              {
                !search
                  ?
                    <PostsList/>
                    :
                    <ResultPost results={results}/>
              }

          </Content>
          <Pie abrir={this.openDrawer} onSearch={this.onSearch} />
        </Drawer>
      </Container>
    )
  }
}

const mapStateToProps = state =>{
  const post = _.map(state.post, (val,uid)=>{
    return {...val, uid};
  });
  return {post, search: state.filter.search}
};

export default Principal= connect (mapStateToProps, {setSearch, postFetch})(Principal);

