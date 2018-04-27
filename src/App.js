import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <h1 className="navbar-brand">
                        Clickeroonie-doonie
                    </h1>
                    <p>
                        Do the clickening
                    </p>
                    <p>
                        Score: Doesn't exist yet
                    </p>
                </nav>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            </div>
        );
    }
}

export default App;
