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
            renderCount:[0],
            optimizedRoute: [],
            routeName: "Friday",
            routeID: null,
            render: false
        }
    }
 
    renderInput=()=>{
        return(
        this.setState({renderCount: [...this.state.renderCount].concat([0])})
        )
    }

    addToAddressList=(address)=>{
        this.setState(prevState => ({
            addressList: [...prevState.addressList, address]
          }),()=>console.log(this.state.addressList)) 
    }

    isFirst = (index) =>{
        if(index===0){
            return true
        }
        else{
            return false
        }
        
    }

    isLast =(obj) =>{
        
        if(this.state.optimizedRoute[this.state.optimizedRoute.length - 1] === obj.name){
            return true
        }
        else{
            return false
        }
    }

    postAddressToRails=(obj, index)=>{
        let details = this.state.addressList.find((address)=>address.address === obj.name)
        
        

        
        let formData = {
            name: details.name ,
            address: details.address ,
            zipcode: details.zipcode,
            latitude: details.lat,
            longitude: details.lng,
            sorted_index: index,
            optimal_index: index,
            first: this.isFirst(index),
            last: this.isLast(obj),
            route_id: this.state.routeID
        };

        // debugger
        console.log(formData)
        
        let configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };
        
        return fetch("http://localhost:3000/addresses/", configObject)
            .then(response => response.json())
            .then(object => {
                console.log(object)
            })
            .catch(error => {
                window.alert(error.message);
            });
             
    }

    postRoute=(name)=>{
        let formData = {
            name: name,
            user_id: 7,
            /////make dynamic
            is_optimized: true
        };
        
        let configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };
        
      
        
        fetch("http://localhost:3000/routes/", configObject)
            .then(response => response.json())
            .then(object => {
                this.setState({
                    routeID: object.id
                })
            })
            .catch(error => {
                window.alert(error.message);
            });

    }

    optimize = () =>{
        
        this.postRoute(this.state.routeName)
        let modifiedAddressList =[]
         this.state.addressList.map((addressObj)=>{ 
            let addressString = {"address":`${addressObj["address"]}`,"lat":`${addressObj["lat"]}`,"lng":`${addressObj["lng"]}`}
            return modifiedAddressList.push(addressString)
            ///added return for warning reaasons delete this if everything works
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
        .then(response => response.text())
        .then(text => {
            let textObj = JSON.parse(text)
            let waypointData = textObj["route"]
            let objArray = Object.keys(waypointData).map(i => waypointData[i])
            this.setState({
                optimizedRoute: objArray
            })
            // 
            this.objectMaptoPost(objArray)
        })
      
    
    }
    objectMaptoPost=(objArray)=>{
        let promises = objArray.map(async(obj,index)=> {
        return this.postAddressToRails(obj, index)
    })
    Promise.all(promises).then(()=>this.props.history.push(`/route/${this.state.routeID}`))}

    render(){
            if(this.state.render) {
                console.log('Heyuyyyyy')
            }
        return(
            <div>
                {this.state.renderCount.map((input)=>{
                    return <Input addToAddressList={this.addToAddressList}/>
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