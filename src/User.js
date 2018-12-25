import React, { Component } from "react";
import { connect } from "react-redux";
import getUser from "./actions/getUser";

class User extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.userId);
 }

render() {
     const  { user } = this.props;
      if(!user){
          return null;
      }
     return <div>{user.data.name}</div>
    
  }
}

const mapStateToProps = (state, ownProps) => {
return {
    user : state.getUserReducer.find(user => user.data.id === ownProps.userId )
  };
};

export default connect(mapStateToProps, {getUser})(User);
