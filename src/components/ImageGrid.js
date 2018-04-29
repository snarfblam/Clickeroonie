import React from 'react';
import ImageCard from './ImageCard';

var ImageGrid = props => {

    return (
        <div className='container'>
            <div className='row'>
                {props.images.map(imgInfo => (
                    <ImageCard
                        dim={props.gameOver && imgInfo.clicked && imgInfo.id != props.loosingId}
                        fail={imgInfo.id == props.loosingId}
                        imgInfo={imgInfo}
                        clickHandler={props.clickHandler}
                        shrunken={props.shrunken}
                    />
                ))}    
            </div>
        </div>
    )};

export default ImageGrid;