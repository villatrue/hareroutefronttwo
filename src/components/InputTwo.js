import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




class InputTwo extends React.Component {
    // useStyles = makeStyles(theme => ({
    //     root: {
    //       padding: theme.spacing(3, 2),
    //       height: 140,
    //     },
    //     hoot: {
    //        margin: 5
    //     }, 
    //     boot: {
    //         margin: 5,
    //         width: 100
    //     },
    //   }));

    // classes = this.useStyles();

    constructor(props){
        super(props)
        this.state={
                name: "name",
                address: "address",
                city: "city",
                usState: "usState",
                zip: "zip",
                lat: "lat",
                long: "long",
                show: false,
                buttonShow: false
    }}

    
    // addressHelper = (event)=>{
    //     debugger
    //     setWaypointDetails([`${name}`, `${address}`])
    //     //    setWaypointDetails({
    //     //         name: name,
    //     //         address: address,
    //     //         city: city,
    //     //         usState: usState,
    //     //         zip: zip,
    //     //         lat: lat,
    //     //         long: long
    //     //         });
    //     console.log(waypointDetails)
    // }





    addressHandle=(event)=>{
        this.setState(...this.state,{address: event.target.value})  
    }

    //  usStateHandle=(event)=>{
    //     setUsState(event.target.value)  
    // }
  
    //  cityHandle=(event)=>{
    //     setCity(event.target.value)  
    // }

     nameHandle=(event)=>{
         let state = [...this.state]
        this.setState(state,{name: event.target.value})  
    }

    //  zipHandle=(event)=>{
    //     setZip(event.target.value)  
    // }

    

     key = "su5XuLGuPfAGvxqqAVpqhzAAI7gxO9oS"
    


    renderLat=()=>{
       let addy = this.state.address.split(" ").join("+")
       let cityModified =  this.state.city.split(" ").join("+")
       let url = `http://open.mapquestapi.com/geocoding/v1/address?key=${this.key}&street=${addy}&city=${cityModified}&state=${this.state.usState}&postalCode=${this.state.zip}`
       


        fetch(url)
            .then(response => {
                
                if (response.status === 200){
                return response.json()}
            })
            .then(obj => {
                console.log(obj)
            //    setLat(obj["results"][0].locations[0].displayLatLng.lat)
            //    setlong(obj["results"][0].locations[0].displayLatLng.lng)
            //    setShow(true)
            //    setButtonShow(false)
            //    setWaypointDetails({
            //     name: name,
            //     address: address,
            //     city: city,
            //     usState: usState,
            //     zip: zip,
            //     lat: lat,
            //     long: long
            //     });
                // debugger
                // console.log(waypointDetails)
                
            
                     
            }).catch(function() {
                alert("error");
                // setShow(false)
                // setButtonShow(true)  
            });
            // 
        }
        render(){
    return (
        <Paper >
            <form>
            <FormControl >
                <InputLabel htmlFor="my-input">Waypoint Name</InputLabel>
                <Input onChange={(event)=>this.nameHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
            {/* <FormControl className={classes.hoot}>
                <InputLabel htmlFor="my-input">Waypoint Address</InputLabel>
                <Input onChange={(event)=>addressHandle(event)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl className={classes.hoot}>
                <InputLabel htmlFor="my-input"> City</InputLabel>
                <Input onChange={(event)=>cityHandle(event)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl className={classes.hoot}>
                <InputLabel htmlFor="my-input">State </InputLabel>
                <Input onChange={(event)=>usStateHandle(event)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl className={classes.hoot}>
                <InputLabel htmlFor="my-input"> Zip Code</InputLabel>
                <Input onChange={(event)=>zipHandle(event)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <br></br>

            {show ?
                <TextField
                id="filled-read-only-input"
                label={lat}
                defaultValue="latitude"
                className={classes.textField}
                margin="normal"
                InputProps={{
                readOnly: true,
                }}
                variant="filled"
              />
             : null
            }

            {show ?
                <TextField
                id="filled-read-only-input"
                label={long}
                defaultValue="longitude"
                className={classes.textField}
                margin="normal"
                onLoad={(event)=>addressHelper(event)}
                InputProps={{
                readOnly: true,
                }}
                variant="filled"
              />
             : null
            }   
            {buttonShow ?
            <Button onClick={()=>{renderLat()}}variant="contained" color="primary" className={classes.button}>
                 Set Coordinates
            </Button>
             : null
            } 
            
            // */}
            </form>
        </Paper>
    )}
  }
  
  export default InputTwo
