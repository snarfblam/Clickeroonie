import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid' 

class App extends Component {
    constructor() {
        super();

        this.state = {
            images: shuffle([
                img('dessgeega', 0),
                img('holtz', 1),
                img('geruta', 2),
                img('mella', 3),
                img('mellow', 4),
                img('memu', 5),
                img('rio', 6),
                img('zebbo', 7),
                img('zoomer', 8),
                img('nova', 9),
                img('zeb', 10),
                img('squeept', 11),
            ]),
            shrunken: false,
        }

        this.enemyClick = this.enemyClick.bind(this);
    }

    enemyClick(evt) {
        // if (evt.target != evt.currentTarget) return;
        evt.preventDefault();

        var id = parseInt(evt.currentTarget.dataset.id);

        var img = this.state.images.find(img => img.id == id);
        if (img.clicked) {
            alert('fale');
        } else {
            this.setState({ shrunken: true });

            img.clicked = true;
            var newData = [];
            for (var i = 0; i < this.state.images.length; i++) newData.push(this.state.images[i]);
            shuffle(newData);

            setTimeout(() => {
                this.setState({ images: newData});
                setTimeout(() => {
                    this.setState({ shrunken: false });
                }, 10)
            }, 200)
        }
    }


    render() {
        return (
            <div className="App">
                <Header />
                <h1>Clickeroonie-Doonie</h1>
                <ImageGrid images={this.state.images} clickHandler={this.enemyClick} shrunken={this.state.shrunken}/>
            </div>
        );
    }
}

function img(name, id, clicked) {
    return {
        name: name,
        url: '/images/' + name + ".gif",
        clicked: clicked || false, // undefined --> false
        id: id,
        setClicked: function (value) {
            return {
                name: this.name,
                url: this.url,
                clicked: value || false,
                id: this.is,
                setClicked: this.setClicked
            }
        },
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

export default App;
