import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getDate from './utils/getDate';

// If this were node...
// const PictureGallery = require( './PictureGallery' )

// But on client-side we do
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';

// REACT Component Incantation
class App extends Component {

  state = {
    whatDayIsIt: 'Taco Day',
    feeling: 'Happy',
    clickCount: 0
  }

  clickalicious = () => {
    this.setState({
      whatDayIsIt: 'Cage Day',
      feeling: 'Clickalus'
    });
  }

  myAwesomeSausomeFunction(){
    console.log( 'I have a state!', this.state );
  }

  onFeelingChange = (event) => {
    console.log('event.target', event.target);
    console.log('event.target.value', event.target.value);
    
    this.setState({
      feeling: event.target.value
    });
  }

  onDayChange = (event) => {
    this.setState({
      whatDayIsIt: event.target.value
    });
  }

  onClickMeClick = () => {
    console.log('Click');
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }
  

  render() {
    // Access state
    console.log( 'App state is', this.state );
    console.log( 'this is', this );

    this.myAwesomeSausomeFunction();

    let clickMessage;
    if (this.state.clickCount < 10) {
      clickMessage = 'Keep Going!';
    }
    else if (this.state.clickCount < 15) {
      clickMessage = 'You\'re doing great!';
    }
    else{
      clickMessage = 'Whoa... chill.';
    }

    return (
      <div>
        <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>

        <div>Today is {getDate()}</div>

        <input type = "text" placeholder = "Feeling" onChange = {this.onFeelingChange} />
        <input type = "text" placeholder = "What day is it?" onChange = {this.onDayChange} />
        <button onClick = {this.clickalicious}>Clickalicious</button>
        
        <div>
          <button onClick = {this.onClickMeClick}>Click Me</button>
          You have clicked this button {this.state.clickCount} times
          <p>
            {clickMessage}
          </p>
        </div>

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
