import React, { Component } from "react";
import { connect } from "react-redux";
import getPosts from "./actions/getPosts";
import User from "./User";

class Posts extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  renderList(){
    const postsData = this.props.posts.data;
    
    if(postsData){
      
     return postsData.map((val,key) => {
      return  <li>
        <h2>{val.title}</h2>
        <p>{val.body}</p>
        <User userId={val.userId}/>
      </li>
    })
   }
}

  render() {
   return (
      <ul>{this.renderList()}</ul> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts : state.getPostsReducer
  };
};

export default connect(mapStateToProps, {getPosts})(Posts);
