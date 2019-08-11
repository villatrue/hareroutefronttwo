import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 180,
  },
  hoot: {
     margin: 5
  }, 
  boot: {
      margin: 5,
      width: 100
  },
}));

const UserInput = (props) => {
    const classes = useStyles();
    const [buttonShow, setButtonShow] = useState(true)
    const [show, setShow] = useState(false)
    const [waypointDetails, setWaypointDetails] = useState({
        name: "name",
        address: 'address',
        city: 'city',
        usState: 'usState',
        zip: 'zip',
        lat: 'lat',
        long: 'long'
                    
    })

    const addressHandle=(event)=>{
        setWaypointDetails({...waypointDetails, address:event.target.value})  
    }

    const usStateHandle=(event)=>{
        setWaypointDetails({...waypointDetails,usState: event.target.value})  
    }
  
    const cityHandle=(event)=>{
        setWaypointDetails({...waypointDetails,city:event.target.value})  
    }

    const nameHandle=(event)=>{
        setWaypointDetails({...waypointDetails,name:event.target.value})  
    }

    const zipHandle=(event)=>{
        setWaypointDetails({...waypointDetails,zip:event.target.value})  
    }
    
   const key = "su5XuLGuPfAGvxqqAVpqhzAAI7gxO9oS"
    
   const renderLat=()=>{
       let addy = waypointDetails.address.split(" ").join("+")
       let cityModified =  waypointDetails.city.split(" ").join("+")
       let url = `http://open.mapquestapi.com/geocoding/v1/address?key=${key}&street=${addy}&city=${cityModified}&state=${waypointDetails.usState}&postalCode=${waypointDetails.zip}`
       
    fetch(url)
        .then(response => { 
            if (response.status === 200){
            return response.json()}
        })
        .then(obj => {
            setWaypointDetails({...waypointDetails, lat:obj["results"][0].locations[0].displayLatLng.lat, 
            long:obj["results"][0].locations[0].displayLatLng.lng});
            setShow(true)
            setButtonShow(false)       
        }).catch(function() {
            alert("error");
            setShow(false)
            setButtonShow(true)  
        });

    }

    return (
        <Paper className={classes.root}>
            <form>
                <FormControl className={classes.hoot}>
                    <InputLabel htmlFor="my-input">Waypoint Name</InputLabel>
                    <Input onChange={(event)=>nameHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.hoot}>
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
                    label={waypointDetails.lat}
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
                    label={waypointDetails.long}
                    defaultValue="longitude"
                    className={classes.textField}
                    margin="normal"
                    onChange={(waypointDetails)=>props.attress(waypointDetails)}
                    fix here
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
            </form>
           
        </Paper>
    )
  }
  
  export default UserInput
