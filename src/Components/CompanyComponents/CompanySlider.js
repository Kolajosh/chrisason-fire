import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
import "./CompanySlider.css";

function CompanySlider() {
  return (
    <>
      <div className="slider-main">
        <div className="slider-title">
          <h1>Our Commitment to Customers</h1>
        </div>
        <div className="slider-context">
          <div className="img-slider">
            <CarouselProvider
              className="company-slide"
              isIntrinsicHeight={true}
              dragEnabled={true}
              touchEnabled={true}
              totalSlides={3}
              interval={3000}
              isPlaying={true}
              infinite={true}
            >
              <Slider>
                <Slide index={0}>
                  <p>
                    "Corporate social responsibility is a hard-edged business
                    decision. Not because it is a nice thing to do or because
                    people are forcing us to do it... because it is good for our
                    business"
                  </p>
                  <br />
                  <br />
                  <b className="quote-author">
                    Niall Fitzerald <br />
                    Former CEO. Unilever
                  </b>
                </Slide>
                <Slide index={1}>
                  <p>
                    "Corporate social responsibility is a hard-edged business
                    decision. Not because it is a nice thing to do or because
                    people are forcing us to do it... because it is good for our
                    business"
                  </p>
                  <br />
                  <br />
                  <b className="quote-author">
                    Niall Fitzerald <br />
                    Former CEO. Unilever
                  </b>
                </Slide>
                <Slide index={2}>
                  <p>
                    "Corporate social responsibility is a hard-edged business
                    decision. Not because it is a nice thing to do or because
                    people are forcing us to do it... because it is good for our
                    business"
                  </p>
                  <br />
                  <br />
                  <b className="quote-author">
                    Niall Fitzerald <br />
                    Former CEO. Unilever
                  </b>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanySlider;
