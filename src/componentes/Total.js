import React from 'react';
import accounting from 'accounting';
// import {  } from '@material-ui/core';
import { makeStyles,Button } from "@material-ui/core";
import {useStateValue} from "../EstadoProveedor";
import {getBasketTotal} from "../reductor";




const useStyles = makeStyles(() => ({
    // no se agrega estilos css

  }));
const Total = () => {
    const classes = useStyles();
    const [{basket}, dispatch ] = useStateValue();
  return (
    <div className={classes.root}>
        <h5>Total Productos: {basket.length}</h5>
        <h5>{accounting.formatMoney(getBasketTotal(basket),"$")}</h5>
        <Button className={classes.button} variant="contained" color="secondary">
            Check out
        </Button>
    </div>
  )
}

export default Total