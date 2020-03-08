import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';
import ErrorBoundaries from './components/ErrorBoundaries';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ErrorBoundaries>
            <StudentForm />
          
        </ErrorBoundaries>
      
      </div>
    );
  }
}

export default App;
