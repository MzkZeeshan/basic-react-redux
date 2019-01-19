import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Newcomponent from './component/newComponent'
import {updateUser} from './Redux/Actions/authAction'

class App extends Component {
  constructor(props)
  {
    super(props)
    console.log("props",this.props);
  }

  render() {
    return (
      <Provider store={store} >
      <div className="App">
      <Newcomponent></Newcomponent>

      </div>
      </Provider>
    );
  }
}

export default App;
