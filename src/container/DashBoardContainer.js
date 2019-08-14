import React from 'react'
import DashTop from '../components/DashTop'
import DashBottom from '../components/DashBottom'


class RouteContainer extends React.Component {
 
    constructor(props){
        super(props)
        this.state={
            userInfo:{}
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.user}`)
            .then(response => response.json())
            .then(obj => {
                this.setState({
                    userInfo: obj
                })
                console.log(obj) 
            });
    }

    render(){
        return(
            <div>
                <div>
                    <DashTop userInfo={this.state.userInfo}/>
                </div>
                <div>
                    <DashBottom routes={this.state.userInfo.routes}/>
                </div>
            </div>
        )
    }

}

export default RouteContainer