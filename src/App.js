import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// If this were node...
// const PictureGallery = require( './PictureGallery' )

// But on client-side we do
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';

// REACT Component Incantation
class App extends Component {

  state = {
    whatDayIsIt: 'Taco Day',
    feeling: 'Happy'
  }

  myAwesomeSausomeFuntion(){
    console.log( 'I have a state!', this.state );
  }

  render() {
    // Access state
    console.log( 'App state is', this.state );
    console.log( 'this is', this );

    this.myAwesomeSausomeFuntion();

    return (
      <div>
        <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>

        <h3>Things to learn about React:</h3>
        <ThingsToLearn />

        <h3>Check out my picture gallery:</h3>
        <PictureGallery />

        <h3>Here's another one!</h3>
        <PictureGallery />
      </div>
    );
  }
}

export default App;
