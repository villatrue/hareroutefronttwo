import React from 'react'
import HomePageSlider from '../components/HomePageSlider'

class HomeContainer extends React.Component {
    constructor(props){
      super(props)
      this.state={
        user: 7
      }
    }
  
    render(){
      return (     
          <div className>
            
            <HomePageSlider/>
          </div>
        )
    }
  }
  
  export default HomeContainer;
  
  