import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Photo from './Photo';

const PhotoFrame = props => {


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