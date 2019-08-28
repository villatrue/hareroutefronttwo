import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Card from "./Card"
// import { statement } from "@babel/template";
// import SliderHeader from './SliderHeader'
// import hare0 from './hare0'


export default class SimpleSlider extends Component {

    constructor(props){
        super(props)
        // debugger
        this.state={
            routes: null
        }
    }

    background = {backgroundSize : 'cover'};
    textStyle = {
        position: 'absolute', 
        top: '50%', 
        left: '50%'
      };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
    //   centerMode: true,
    //   centerPadding: '200px'
    };
    return (
      <div>
        
       
       
        <Slider {...settings}>
           
             
              
        <div>
          <h1>Route Logistic Solution</h1>
          <img backgroundSize = 'cover' align="center" auto src={require('./hare0.jpg')} alt="Logo" />
        </div>
        <div>
          <h1>Sometimes journeys are not just A to B</h1>
          <img  align="center" src={require('./hare1.jpg')} alt="Logo" />
        </div>
        <div>
          <h1>We're Here when you need guidance going from A to Z</h1>
          <img  align="center" src={require('./hare2.jpg')} alt="Logo" />
        </div>
        <div>
          <h1>Minivans with a mountains are sweet!</h1>
          <img align="center" src={require('./hare3.jpg')} alt="Logo" />
        </div>
        </Slider>

      </div>
    );
  }
}
