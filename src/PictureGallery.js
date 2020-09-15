// Import React Library
// And also the `Component` variable from inside it
import React, { Component } from 'react';

class PictureGallery extends Component {

    state = {
        photoWidth: 200,
        photoHeight: 200
    }

    render() {
        return (
            <div>
                <img src={`https://picsum.photos/${this.state.photoWidth}/${this.state.photoHeight}`} />
                <img src={`https://picsum.photos/${this.state.photoWidth}/${this.state.photoHeight}`} />
                <img src={`https://picsum.photos/${this.state.photoWidth}/${this.state.photoHeight}`} />
                <img src={`https://picsum.photos/${this.state.photoWidth}/${this.state.photoHeight}`} />
                <img src={`https://picsum.photos/${this.state.photoWidth}/${this.state.photoHeight}`} />
                <img src={`https://picsum.photos/${this.state.photoWidth}/${this.state.photoHeight}`} />
            </div>
        );
    }
}

// If this were node...
// module.exports = PictureGallery;

// But on the client-side we do:
export default PictureGallery;