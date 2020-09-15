// Import React Library
// And also the `Component` variable from inside it
import React, { Component } from 'react';

class PictureGallery extends Component {
    render() {
        return (
            <div>
                <img src="https://picsum.photos/200/200" />
                <img src="https://picsum.photos/200/200" />
                <img src="https://picsum.photos/200/200" />
                <img src="https://picsum.photos/200/200" />
                <img src="https://picsum.photos/200/200" />
                <img src="https://picsum.photos/200/200" />
            </div>
        );
    }
}

// If this were node...
// module.exports = PictureGallery;

// But on the client-side we do:
export default PictureGallery;