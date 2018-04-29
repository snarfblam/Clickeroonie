import React from 'react';

var ImageCard = props => {
    var imgInfo = props.imgInfo

    var imgClass = 'align-middle enemy-image';
    var enemyCardClass = 'enemy-card p-1';

    if (props.shrunken) imgClass += ' enemy-shrink';
    if (props.dim) imgClass += ' enemy-dim';
    if (props.dim) enemyCardClass += ' enemy-card-dim';
    if (props.fail) enemyCardClass += ' enemy-card-fail';

    return (
        <div className="col-6 col-sm-4 col-md-3 p-2" key={imgInfo.id}>
            <div className={enemyCardClass}>
                <a href="#enemy" data-id={imgInfo.id} onClick={props.clickHandler}>
                    <div className="enemy-container p-1">
                        <img src={imgInfo.url} className={imgClass} alt={imgInfo.name} />
                    </div>
                </a>
            </div>
        </div>
    );    
};

export default ImageCard;