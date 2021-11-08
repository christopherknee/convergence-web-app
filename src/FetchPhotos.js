import React from "react";
import PhotoFrame from "./PhotoFrame";

export default class FetchPhotos extends React.Component {

    state = {
        loading: true,
        photos: [],
    };

    async componentDidMount() {

        const url = 'https://jsonplaceholder.typicode.com/photos/';
        const photos = await fetch(url);
        const data = await photos.json();
        console.log(data);
        this.setState({loading: false, photos: data})
    }

    render() {
        return (
            <div>
                <PhotoFrame photos={this.state.photos}></PhotoFrame>
            </div>

        );

    }


}