import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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
    const [buttonShow, setButtonShow] = useState(0)
    const [show, setShow] = useState(1)
    
    const [waypointDetails, setWaypointDetails] = useState({
        name: "",
        address: '',
        lat: null,
        lng: null,
        city: '',
        usState: '',
        zip: ''
      
                    
    })

    useEffect(() => {
      {waypointDetails.lat !== null ? props.addToAddressList(waypointDetails): console.log("<3")}
    }, [waypointDetails.lat])
    

    const formHandle=(event)=>{
        setWaypointDetails({...waypointDetails, [event.target.name]:event.target.value})
        // "REFACTORRRRRR"
        console.log(waypointDetails)
        console.log(event.target.name)  
    }
    
   const key = "su5XuLGuPfAGvxqqAVpqhzAAI7gxO9oS"
    
   const renderLat= ()=>{
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
            lng:obj["results"][0].locations[0].displayLatLng.lng});
            // console.log(obj)
            setShow(0)
            setButtonShow(1)
            // console.log(waypointDetails)
            // debugger

            // props.attress()

        })
        .catch(function() {
            alert("error");
            setShow(1)
            setButtonShow(0)  
        });

    }

    return (
        <Paper className={classes.root}>
            <form>
                <FormControl className={classes.hoot}>
                    <InputLabel htmlFor="my-input">Waypoint Name</InputLabel>
                    <Input name="name" onChange={(event)=>formHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.hoot}>
                    <InputLabel htmlFor="my-input">Waypoint Address</InputLabel>
                    <Input name="address" onChange={(event)=>formHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.hoot}>
                    <InputLabel htmlFor="my-input"> City</InputLabel>
                    <Input name="city" onChange={(event)=>formHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.hoot}>
                    <InputLabel htmlFor="my-input">State </InputLabel>
                    <Input name="usState" onChange={(event)=>formHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.hoot}>
                    <InputLabel htmlFor="my-input"> Zip Code</InputLabel>
                    <Input name="zip" onChange={(event)=>formHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br></br>

                {show === 0 ?
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

                {show === 0 ?
                    <TextField
                    id="filled-read-only-input"
                    label={waypointDetails.lng}
                    defaultValue="longitude"
                    className={classes.textField}
                    margin="normal"
                    fix here
                    InputProps={{
                    readOnly: true,
                    }}
                    variant="filled"
                />
                : null
                }   
                {buttonShow === 0 ?
                <Button onClick={()=>{renderLat()}} variant="contained" color="primary" className={classes.button}>
                    Set Coordinates
                </Button>
                : null
                } 
            </form>
           
        </Paper>
    )
  }
  
  export default UserInput
