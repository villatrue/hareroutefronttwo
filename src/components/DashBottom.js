import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { typography } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 190,
    margin: 10
    

  },
}));

const DashBottom = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h2" component="h3">
             This is a sheet of paper.
            </Typography>
            <Typography component="p">
             Paper can be used to build surface or other elements for your application.
            </Typography>
      </Paper>
    )
  }
  
  export default DashBottom