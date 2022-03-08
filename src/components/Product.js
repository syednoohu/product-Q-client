//https://stackoverflow.com/questions/50272814/image-on-material-ui-cardmedia
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';

// import pic1 from '../assets/images/products/pic1.jpg'

const useStyles = makeStyles({
  media : {
    height :300,
    objectFit:'fill'
  }
})
export default function Product({ id, title,description, price, photo  }) {
  console.log(photo)
  const classes = useStyles();
  return (
    <Card elevation={3}>
      <CardHeader
        title={title}
        subheader={price}
      />
      <CardMedia
        className={classes.media}
        component="img"
        // height="250"
        image= {photo}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions >
       <Button 
          size="small"
          variant='outlined'
          endIcon={<QuestionMarkTwoToneIcon/>}
          >
          Enquiry
        </Button>
      </CardActions>
    </Card>
  );
}
