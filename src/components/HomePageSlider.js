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

    componentDidMount(){
        // debugger
      
    }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   centerMode: true,
    //   centerPadding: '200px'
    };
    return (
      <div>
        
       
       
        <Slider {...settings}>
           
             
              
        <div>
          <img align="center" auto src={require('./hare0.jpg')} alt="Logo" />
        </div>
        <div>
          <img  align="center" src={require('./hare1.jpg')} alt="Logo" />
        </div>
        <div>
          <img  align="center" src={require('./hare2.jpg')} alt="Logo" />
        </div>
        <div>
          <img align="center" src={require('./hare3.jpg')} alt="Logo" />
        </div>
        </Slider>

      </div>
    );
  }
}
