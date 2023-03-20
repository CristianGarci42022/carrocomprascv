import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Producto from './Producto';
import productos from '../Producto-data';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:theme.spacing(2),
  },

}));

export default function Productos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
      {
        productos.map(producto=>(
        <Grid item xs={12} sm={6} md={3}>
          <Producto key={producto.id} producto={producto}/>
        </Grid>
        ))
      }

        
      </Grid>
    </div>
  );
}
