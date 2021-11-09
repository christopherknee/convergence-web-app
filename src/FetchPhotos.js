import React from "react";
import PhotoFrame from "./PhotoFrame";


export default class FetchPhotos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            photos: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/photos/';
        const photos = await fetch(url);
        const data = await photos.json();
        this.setState({photos: data});
    }

    
    // Stores photos as a local variable, calls recursive function
    // and then sets the state to the new reordered list
    handleClick() {
        let currPhotos = this.state.photos;
        let randomizedPhotos = this.randomizePhotos(currPhotos, 0);
        this.setState({photos: randomizedPhotos});
    }

    randomizePhotos(photos) {
        if (photos.length === 1) {
            return photos
        };
        const randInt = Math.floor(Math.random() * photos.length); // Generate random number between 0 to photos.length-1
        return [photos[randInt], ...this.randomizePhotos(photos.filter((_, i) => i !== randInt))]; // Filtering out the photo at index randInt
       
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