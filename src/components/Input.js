import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import { typography } from '@material-ui/system';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 100,
  },
  hoot: {
     margin: 5
  }, 
  boot: {
      margin: 5,
      width: 100
  },
//   toot: {
    
//     height: 20
//   }

}));

const UserInput = (props) => {
    const classes = useStyles();

    let [show, setShow] = useState(false)
    let [lat, setLat] =useState("")
    let [long, setlong] =useState("")
    let [address, setAddress] = useState("")
    let [zip, setZip] = useState("")
    let [city, setCity] = useState("")
    let [usState, setUsState] = useState("")
    let [name, setName] = useState("")
    let [waypointDetails, setWaypointDetails] = useState([])

    const addressHandle=(event)=>{
        setAddress(event.target.value)  
    }

    const usStateHandle=(event)=>{
        setUsState(event.target.value)  
    }
  
    const cityHandle=(event)=>{
        setCity(event.target.value)  
    }

    const nameHandle=(event)=>{
        setName(event.target.value)  
    }

    const zipHandle=(event)=>{
        setZip(event.target.value)  
    }

    const key = "su5XuLGuPfAGvxqqAVpqhzAAI7gxO9oS"


   const renderLat=()=>{
       let addy = address.split(" ").join("+")
       let cityModified =  city.split(" ").join("+")
       let url = `http://open.mapquestapi.com/geocoding/v1/address?key=${key}&street=${addy}&city=${cityModified}&state=${usState}&postalCode=${zip}`
       


        fetch(url)
            .then(response => response.json())
            .then(obj => {
               setLat(obj["results"][0].locations[0].displayLatLng.lat)
               setlong(obj["results"][0].locations[0].displayLatLng.lng)
            });
         setShow(true)       
        }

    return (
        <Paper className={classes.root}>
            <form>
            <FormControl className={classes.hoot}>
                <InputLabel htmlFor="my-input">Waypoint Name</InputLabel>
                <Input onChange={(event)=>nameHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
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
                InputProps={{
                readOnly: true,
                }}
                variant="filled"
              />
             : null
            }   
            
            <Button onClick={()=>{renderLat()}}variant="contained" color="primary" className={classes.button}>
                 Set Coordinates
            </Button>
            </form>
           
        </Paper>
    )
  }
  
  export default UserInput



//   <FormControl className={classes.boot}>
//   <InputLabel htmlFor="my-input">Latitude</InputLabel>
//   <Input id="my-input" aria-describedby="my-helper-text" />
//   {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
// </FormControl>
// <FormControl className={classes.boot}>
//   <InputLabel htmlFor="my-input">Longitude</InputLabel>
//   <Input id="my-input" aria-describedby="my-helper-text" />
//   {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
// </FormControl>