import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  font: {
    fontFamily: 'Comfortaa, cursive',
  },
  boldFont: {
    fontFamily: 'Comfortaa, cursive',
    fontWeight: 'bold'
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.item.image}
          title="Contemplative Reptile"
          className={classes.boldFont}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.boldFont}>
          {props.item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
           {props.item.text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.boldFont} style={{ marginTop: 20 }}>
           {props.item.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.font}>
          Order
        </Button>
        <Button size="small" color="primary" className={classes.font}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}