import React from 'react';

const GameOver = props => (
    props.gameOver ?
        <div>
            <h1>Mission failed!</h1>
            <button className="big-button" onClick={props.clickHandler}>Try Again</button>
        </div>
    :
        null    
)

export default GameOver;