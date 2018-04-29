import React from 'react';

var ImageGrid = props => (
    <div className='container'>
        <div className='row'>
            {props.images.map(imgInfo => (
                <div className="col-3 p-2" key={imgInfo.id}>
                    <div className="enemy-card p-1">    
                        <a href="#enemy" data-id={imgInfo.id} onClick={props.clickHandler}>    
                            <div className="enemy-container p-1">    
                                <img src={imgInfo.url} className={'align-middle enemy-image' + (props.shrunken ? " enemy-shrink" : '')} alt={imgInfo.name} />
                                
                            </div>
                        </a>    
                    </div>
                </div>
            ))}    
        </div>
    </div>
);

export default ImageGrid;