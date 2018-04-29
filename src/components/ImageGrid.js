import React from 'react';

var ImageGrid = props => {

    return (
        <div className='container'>
            <div className='row'>
                {props.images.map(imgInfo => {
                    var imgClass = 'align-middle enemy-image';
                    if (props.shrunken) imgClass += ' enemy-shrink';
                    if (props.gameOver && imgInfo.clicked && imgInfo.id != props.loosingId) imgClass += ' enemy-dim';

                    var enemyCardClass = 'enemy-card p-1';
                    if (imgInfo.id == props.loosingId) enemyCardClass += ' enemy-card-fail'
                    return (
                        <div className="col-3 p-2" key={imgInfo.id}>
                            <div className={enemyCardClass}>
                                <a href="#enemy" data-id={imgInfo.id} onClick={props.clickHandler}>
                                    <div className="enemy-container p-1">
                                        {
                                            <img src={imgInfo.url} className={imgClass} alt={imgInfo.name} />
                                        }
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                })}    
            </div>
        </div>
    )};

export default ImageGrid;