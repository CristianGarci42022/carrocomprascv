import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import accounting from "accounting";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions:{
    display:"flex",
    justifyContent:"space-between",
    textAlign:"center",
  },    
  CardRating:{
    display:"flex",
  }
  
}));

export default function TarjetaPago({producto : {id, nombre, tipoProducto,precio,calificacion,image,descripcion}}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
       
        action={
            <Typography
                className={classes.action}
                variant = "h5"
                color="textSecodary"
           >
            
            {accounting.formatMoney(precio,"$")}
           </Typography> 
        }
        title={nombre}
        subheader="en Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={nombre}
      />
      
      <CardActions disableSpacing className={classes.cardActions}>
       
      <div className={classes.CardRating}>
            {Array(calificacion)
                .fill()
                .map((_, i)=>(
                    <p>&#11088;</p>
                ))
            }
        </div>
        <IconButton>
            <DeleteForeverIcon fontSize="large"/>
        </IconButton>
        
      </CardActions>

    </Card>
  );
}
