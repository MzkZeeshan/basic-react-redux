import React, { Component } from 'react';
import logo from '../logo.svg';
import {connect} from 'react-redux';
import '../App.css';
import { updateUser,removeUser } from '../Redux/Actions/authAction';



class newComponent extends Component {
  constructor(props)
  {
    super(props)
    console.log("props",this.props);
  }
  componentDidMount()
  {
      console.log("this .props in componentDid Mount",this.props)
      this.props.modifyuser({myuser:"zeeshan"});
      this.props.deleteUser();
  }
  componentWillReceiveProps(nextprops)
  {
      console.log(" componentWillReceiveProps ",nextprops)
   
     
  }
  render() {
    return (
 
      <div className="App">
 <h1>zeeshan</h1>

      </div>

    );
  }
}
const mapStateToProps = (state)=>
{
    return {user: state.re}
}
const mapDispatchToProps = (dispatch)=>
{ 
    return { modifyuser : (myuser)=> dispatch(updateUser(myuser)),
      deleteUser : () => dispatch(removeUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(newComponent);
