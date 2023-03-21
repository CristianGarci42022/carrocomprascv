import React from 'react';
import accounting from 'accounting';
// import {  } from '@material-ui/core';
import { makeStyles,Button } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
   

  }));
const Total = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <h5>Total Items: 3</h5>
        <h5>{accounting.formatMoney(50,"$")}</h5>
        <Button className={classes.button} variant="contained" color="secondary">
            Check out
        </Button>
    </div>
  )
}

export default Total