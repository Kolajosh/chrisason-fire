import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./CarouselText.css";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";

function CarouselText() {
  return (
    <>
      <div className="content">
        <div className="img-slider">
          <CarouselProvider
            className="case-slide"
            isIntrinsicHeight={true}
            dragEnabled={true}
            touchEnabled={true}
            totalSlides={3}
            interval={3000}
            isPlaying={true}
            infinite={true}
          >
            <Slider moveThreshold={0}>
              <Slide index={0}>
                <img src={img1} alt="slide1" className="slideimg"></img>
              </Slide>
              <Slide index={1}>
                <img src={img2} alt="slide2" className="slideimg"></img>
              </Slide>
              <Slide index={2}>
                <img src={img3} alt="slide3" className="slideimg"></img>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
        <div className="case-text">
          <div className="text1">
            <p className="bold">Research & Analysis</p>
            <p>
              All our projects undergo research and analysis. Research is what
              allows our experts know exactly how to best meet your safety
              challenges.
            </p>
          </div>
          <div className="text2">
            <p className="bold">Fire Protection Engines</p>
            <p>
              Fire Apparatus & Engines are a must for any community that is keen
              on securing the lives and properties of its people. We have & can
              assist in consulting and supplying your fire engines.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselText;
