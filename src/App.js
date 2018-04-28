import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid' 

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            images: [
                img('desgeega.gif', 0),
                img('holtz.gif', 1),
                img('geruta.gif', 2),
                img('mella.gif', 3),
                img('mellow.gif', 4),
                img('memu.gif', 5),
                img('rio.gif', 6),
                img('zebbo.gif', 7),
                img('zoomer.gif', 8),
                img('nova.gif', 9),
                img('zeb.gif', 10),
                img('squeept.gif', 11),
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <h1>Clickeroonie-Doonie</h1>
                <ImageGrid />
            </div>
        );
    }
}

function img(name, id, clicked) {
    return {
        url: '/images/' + name,
        clicked: clicked || false, // undefined --> false
        id: id,
        setClicked: function (value) {
            return {
                url: this.url,
                clicked: value || false,
                id: this.is,
                setClicked: this.setClicked
            }
        },
    }
}

export default App;
