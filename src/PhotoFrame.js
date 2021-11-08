import React from 'react';
import Photo from './Photo';

const PhotoFrame = props => {

    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo url={photo.url} key={photo.id} />;
        });
    }
    return (
            <div>
                {displayPhotos()}
            </div>
    )
}

export default PhotoFrame