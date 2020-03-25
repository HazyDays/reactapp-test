import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <section>
        <h1>
          Simple test carousel using <span>pure-react-carousel</span>
        </h1>
        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <img
                  src="https://source.unsplash.com/random/680x400"
                  alt="Random"
                />
              </Slide>
              <Slide index={0}>
                <img
                  src="https://source.unsplash.com/random/680x400?sig=2"
                  alt="Random"
                />
              </Slide>
              <Slide index={0}>
                <img
                  src="https://source.unsplash.com/random/680x400?sig=3"
                  alt="Random"
                />
              </Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
