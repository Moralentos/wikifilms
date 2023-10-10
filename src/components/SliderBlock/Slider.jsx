import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const { slides } = this.props;

    return (
      <div className='slider'>
        <div className='slider-content'>
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
              {slide}
            </div>
          ))}
        </div>
        <button onClick={this.handlePrev} disabled={currentIndex === 0}>
          Prev
        </button>
        <button onClick={this.handleNext} disabled={currentIndex === slides.length - 1}>
          Next
        </button>
      </div>
    );
  }
}

export default Slider;
