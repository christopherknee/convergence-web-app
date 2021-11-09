import React from "react";
import PhotoFrame from "./PhotoFrame";


export default class FetchPhotos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            photos: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {

        const url = 'https://jsonplaceholder.typicode.com/photos/';
        const photos = await fetch(url);
        const data = await photos.json();
        this.setState({loading: false, photos: data});
    }

    handleClick() {
        let currPhotos = this.state.photos;
        let randomizedPhotos = this.randomizePhotos(currPhotos, 0);
        this.setState({photos: randomizedPhotos});
    }

    randomizePhotos(photos) {
        if (photos.length === 1) {
            return photos
        };
        const rand = Math.floor(Math.random() * photos.length);
        return [photos[rand], ...this.randomizePhotos(photos.filter((_, i) => i !== rand))];
       
    }
    

    render() {
        return (
            <div>
                <PhotoFrame photos={this.state.photos}></PhotoFrame>
                <button onClick={this.handleClick}>
                    Randomize!
                </button>
            </div>

        );

    }


}