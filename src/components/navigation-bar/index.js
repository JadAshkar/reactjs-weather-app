import React from "react";

import { Link } from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: '#939393',
    },
    item: {
        backgroundColor: '#939393',
        padding: 20,
        '&:hover': {
            backgroundColor: '#4051b5',
        }
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
}))

const NavigationBar = () =>{
    const classes = useStyles();

    return(
        <Grid container className={classes.container}>
            <Grid item xs={1} className={classes.item}>
                <Link to="/" className={classes.link}>
                    Home
                </Link>
            </Grid>
            <Grid item xs={1} className={classes.item}>
            <Link to="/history" className={classes.link}>
                    History
                </Link>
            </Grid>
        </Grid>
    )
}

export default NavigationBar