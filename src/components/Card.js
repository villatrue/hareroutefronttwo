import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    minHeight: 180,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

export default function SimpleCard(props) {
  const classes = useStyles();
 

  return (
    <Card className={classes.card}>
      <CardContent>
        <div>
        {props.route !== undefined ?<Typography variant="h5" component="h2">
                    {props.route.name}
                </Typography>: "loading"}
        </div>
      </CardContent>
      <CardActions>
        <Link to={`/route/${props.id}`}>
        <Button size="small">See More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}