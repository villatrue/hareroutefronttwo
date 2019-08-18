import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import HomeIcon from '@material-ui/icons/Home';
// import {Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1, 1),
  },
  toolbar:{
    height: 40,
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  icon: {
      height: 80,
      width: 80,
  },
  
  title: {
    flexGrow: 1,
    
  },
}));

export default function BottomBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {/* <Link to="/dashboard">
            <IconButton edge="start" className={classes.menuButton} color="green" aria-label="menu">
                <HomeIcon className={classes.icon}/>
            </IconButton>
          </Link> */}
          <Typography variant="h4" className={classes.title}>
            Your Routes
          </Typography>
          {/* <Button color="inherit">Logout</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}