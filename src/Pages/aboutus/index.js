import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  media: {
    width: 150, // تعديل حسب الحجم المطلوب للصورة
  },
  content: {
    flex: 1,
    padding: '16px',
  },
});

function ImageWithText(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image={props.imageURL}
        alt={props.imageAlt}
      />
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {props.paragraph}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ImageWithText;

