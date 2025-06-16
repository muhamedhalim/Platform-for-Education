"use client";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './slidercard';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const slider = () => {
    return ( 
        <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} infinite responsive={responsive} itemClass='item'>
            <SliderCard image="/images/r1.jpg" name="jusica Doe" role="Web developer"/>
            <SliderCard image="/images/r2.jpg" name="john Doe" role="Next js developer"/>
            <SliderCard image="/images/r3.jpg" name="jonas Doe" role="js developer"/>
        </Carousel>
    );
}
 
export default slider;
