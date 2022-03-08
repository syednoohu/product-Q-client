
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';

import pic1 from '../assets/images/products/pic1.jpg'

export default function Product() {
  return (
    <Card elevation={3}>
      <CardHeader
        title="DSLR cameras from Nikon"
        subheader="₹ 11.99"
      />
      <CardMedia
        component="img"
        height="150"
        image={pic1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia eros dolor, et aliquet dui sollicitudin at. Integer fringilla suscipit sapien, vitae ultrices leo pretium ut. Donec egestas nunc a nibh faucibus volutpat. Nunc id ex feugiat neque fringilla efficitur.
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
