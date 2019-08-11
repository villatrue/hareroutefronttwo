import React from 'react'
import DashTop from '../components/DashTop'
import DashBottom from '../components/DashBottom'


class RouteContainer extends React.Component {
 
    componentDidMount(){
        console.log("hi boi")
    }

    render(){
        return(
            <div>
                <div>
                    <DashTop/>
                </div>
                <div>
                    <DashBottom/>
                </div>
            </div>
        )
    }

}

export default RouteContainer