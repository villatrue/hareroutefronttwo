import React from 'react'
// import { ReactComponent } from '*.svg';
import Address from '../components/Address'


class RouteContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            addressList: [],
            route: {}
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/routes/4')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    route: data.name,
                    addressList: data.addresses
                })
            });
    }

    render(){ 
        return(
            <div>
                {this.state.addressList.map((addressObj)=>{
                    return <Address address={addressObj}/> }  )}
                
            </div>
        )}
}

export default RouteContainer;