import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header bg-brand-header fixed-top" />
        <div className="App-main">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="App-title">Welcome to React</h1>
                <p>
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer>i am a footer</footer>
      </div>
    );
  }
}

export default App;
