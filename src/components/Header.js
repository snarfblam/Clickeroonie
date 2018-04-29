import React from 'react';

var Header = props => (
    <nav className="page-header header-dark justify-content-between">
        <p className="">
            Clickeroonie-doonie
        </p>
        <p>
            Do the clickening
        </p>
        <p>
            Score: {props.score} | Top: {props.topScore}
        </p>
    </nav>
); 

export default Header;