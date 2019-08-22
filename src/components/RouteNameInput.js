import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 50,
  },
}));

const RouteNameInput = (props) => {
    const classes = useStyles();
    const [routeName, setRouteName] = useState("")

    useEffect(() => {
        {routeName !== null ? props.routeNameHandle(routeName): console.log("<3")}
      }, [routeName])

    const formHandle=(event)=>{
      setRouteName(event.target.value)
        console.log(routeName)
        console.log(event.target.name)  
    }


    
   
    return (
        <Paper className={classes.root}>
            <form>
                <FormControl className={classes.hoot}>
                    <InputLabel htmlFor="my-input">Route Name</InputLabel>
                    <Input name="Route name" onChange={(event)=>formHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br></br>
            </form>
           
        </Paper>
    )
  }
  
  export default RouteNameInput
