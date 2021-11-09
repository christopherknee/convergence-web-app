import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Photo from './Photo';

const PhotoFrame = props => {

    // apply styling to every photo in the array,
    // then display using a horiztonal scroll menu
    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo url={photo.url} key={photo.id} title={photo.title} />;
        });
    }
    return (
            <div>
                <ScrollMenu>
                    {displayPhotos()}
                </ScrollMenu>
            </div>
    )
}

export default PhotoFrame