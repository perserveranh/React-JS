import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
