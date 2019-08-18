import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"
// import { statement } from "@babel/template";
import SliderHeader from './SliderHeader'


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
        this.setState({
            routes: this.props.userInfo.routes
        })
    }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        
        <SliderHeader/>
       
        <Slider {...settings}>
            
                {this.props.userInfo.routes !== undefined && this.props.userInfo.routes !== null ? this.props.userInfo.routes.map((route)=>{
                return <div><Card route={route} key={route.id} id={route.id}/></div>
                // return <div><h3> hi</h3> </div>
              }): null}
             
              
               {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
        </Slider>

      </div>
    );
  }
}

