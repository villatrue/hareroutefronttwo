import React from 'react'

import Input from '../components/Input'
import Button from '@material-ui/core/Button';



class SearchContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            addressList:[{name: "Silver Spring", address: "11903 Selfridge Road", lat: 39.055441, lng: -77.083759, city: "Wheaton", usState: "md", zipcode: 20906},
            {name: "Andy's", address: "719 hollywood ave", lat: 39.064071, lng: -76.994148, city: "Colesville", usState: "md", zipcode: 20904},
            {name: "Jose", address: "4111 tulare dr", lat: 38.995908, lng: -77.028892, city: "Silver Spring", usState: "md", zipcode: 20906},
            {name: "vic", address: "7716 garland ave", lat: 38.991535, lng: -76.999626, city: "takoma park", usState: "md", zipcode: 20912},  
            {name: "Silver Spring", address: "11903 Selfridge Road", lat: 39.055441, lng: -77.083759, city: "Wheaton", usState: "md", zipcode: 20906}],
            renderCount:[0]
          
        }
    }
    // here = [{name: "Silver Spring", address: "11903 Selfridge Road", lat: 39.055441, lng: -77.083759, city: "Wheaton", usState: "md", zipcode: 20906},
    // {name: "Andy's", address: "719 hollywood ave", lat: 39.064071, lng: -76.994148, city: "Colesville", usState: "md", zipcode: 20904},
    // {name: "Jose", address: "4111 tulare dr", lat: 38.995908, lng: -77.028892, city: "Silver Spring", usState: "md", zipcode: 20906},
    // {name: "vic", address: "7716 garland ave", lat: 38.991535, lng: -76.999626, city: "takoma park", usState: "md", zipcode: 20912},  
    // {name: "Silver Spring", address: "11903 Selfridge Road", lat: 39.055441, lng: -77.083759, city: "Wheaton", usState: "md", zipcode: 20906}]





    renderInput=()=>{
        return(
        this.setState({renderCount: [...this.state.renderCount].concat([0])})
        )
    }

    addToAdressList=(attress)=>{
        this.setState(prevState => ({
            addressList: [...prevState.addressList, attress]
          }),()=>console.log(this.state.addressList)) 
    }

    optimize=()=>{
        let modifiedAddressList =[]
         this.state.addressList.map((addressObj)=>{ 
            let addressString = {"address":`${addressObj["address"]}`,"lat":`${addressObj["lat"]}`,"lng":`${addressObj["lng"]}`}
            modifiedAddressList.push(addressString)
        })

        let yeet = JSON.stringify(modifiedAddressList)
        let url = `https://api.routexl.com/v2/tour/?`
        let username = 'villatrue';
        let password = 'joseph';
        let details = {
            locations: yeet
        }

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
         
        fetch(url, {method:'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            },
            body: formBody
            })
        .then(response => {
            console.log(response)
            debugger
            return response.text()})
        .then(text => console.log(text));
      
    }

    render(){
        return(
            <div>
                {this.state.renderCount.map((input)=>{
                    return <Input attress={this.addToAdressList}/>
                    })
                }
                {this.state.renderCount.length<10?
                    <Button onClick={()=>{this.renderInput()}}variant="contained" color="primary" >
                        Add another Waypoint
                    </Button>: null
                }
                    <Button onClick={()=>{this.optimize()}}variant="contained" color="primary" >
                        Optimize Your Route
                    </Button>
            </div>
        )
    }
    
}

export default SearchContainer