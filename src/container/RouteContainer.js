import React from 'react'
// import { ReactComponent } from '*.svg';

class RouteContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            addresses: [],
            route: {}
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/routes/4')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    route: data.name,
                    addresses: data.addresses
                })
            });
    }

    render(){ 
        return(
            <div>
                <a>hello</a>
            </div>
        )}
}

export default RouteContainer;