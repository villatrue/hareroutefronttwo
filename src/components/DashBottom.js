import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { typography } from '@material-ui/system';
import Card from '../components/Card'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 190,
    margin: 10,
    flexGrow: 1,
  },
 
  card: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },

}));

const DashBottom = (props) => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

    const{routes, setRoutes} = useState([])
    
    // useEffect(() => {
    //   setRoutes(props.route);
    // }, [])
    
  
    return (
      <Paper className={classes.root}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
            <Grid>
              {props.routes !== undefined ? props.routes.map((route)=>{
                return <Card className={classes.card} route={route} key={route.id}/>
              }): "loading"}
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Paper>


    )
  }
  
  export default DashBottom