import React from 'react';

var Header = props => (
    <nav className="page-header header-dark justify-content-between">
        <p>
            <a href="https://github.com/snarfblam/Clickeroonie">GitHub</a>
        </p>
        <h2>
            Clickeroonie
        </h2>
        <p>
            Score: {props.score} ● Top: {props.topScore}
        </p>
    </nav>
); 

export default Header;