import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import GameOver from './components/GameOver';

class App extends Component {
    constructor() {
        super();

        this.state = {
            images: this.getImageList(),
            shrunken: false,
            score: 0,
            topScore: 0,
            gameOver: false,
            loosingId: -1, 
        }

        this.enemyClick = this.enemyClick.bind(this);
        this.tryAgainClick = this.tryAgainClick.bind(this);
    }

    getImageList() {
        return shuffle([
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
        ]);
    }

    enemyClick(evt) {
        // if (evt.target != evt.currentTarget) return;
        evt.preventDefault();

        var id = parseInt(evt.currentTarget.dataset.id);

        var img = this.state.images.find(img => img.id == id);
        if (img.clicked) {
            this.setState({ gameOver: true, loosingId: id });
        } else {
            this.setState({ shrunken: true });

            img.clicked = true;
            var newData = [];
            for (var i = 0; i < this.state.images.length; i++) newData.push(this.state.images[i]);
            shuffle(newData);

            setTimeout(() => {
                this.setState({ images: newData, score: this.state.score + 1});
                setTimeout(() => {
                    this.setState({ shrunken: false, topScore: Math.max(this.state.score, this.state.topScore) });
                }, 10)
            }, 200)
        }
    }

    nullClick(evt) {
        evt.preventDefault();
    }

    tryAgainClick(evt) {
        this.setState({
            images: this.getImageList(),
            loosingId: -1,
            gameOver: false,
            score: 0,
        });
    }

    render() {
        return (
            <div className="App">
                <Header score={this.state.score} topScore={this.state.topScore}/>
                <h3>Show off your click-each-image-but-only-once skills</h3>
                <ImageGrid
                    images={this.state.images}
                    clickHandler={this.state.gameOver ? this.nullClick : this.enemyClick}
                    shrunken={this.state.shrunken}
                    gameOver={this.state.gameOver}
                    loosingId={this.state.loosingId}
                />
                <GameOver gameOver={this.state.gameOver} clickHandler={this.tryAgainClick} />
                {/* {this.state.gameOver ? <button className="big-button">Try Again</button> : null} */}
                
            </div>
        );
    }
}

function img(name, id, clicked) {
    return {
        name: name,
        url: 'images/' + name + ".gif",
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
