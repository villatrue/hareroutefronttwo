import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 420,
    margin: 10
  },
}));

export default function DashTop(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
      {(props.userInfo !== undefined)?
        <Typography variant="h2" component="h3">
           Welcome {props.userInfo.username}. You're Awesome!
        </Typography>: "Loadding"}
        <Typography component="p">
          Feel free to add a new route.
        </Typography>

        <Link to={`/addroute/`}>
          <Fab color="secondary" size="large" aria-label="add" className={classes.margin}>
            <AddIcon />
          </Fab>
        </Link>

      </Paper>
      
    </div>
  );
}