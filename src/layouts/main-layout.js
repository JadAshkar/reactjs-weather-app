// import libs
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import NavigationBar from '../components/navigation-bar/index.js'

const useStyles = makeStyles (() => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        marginTop: 20,
    },
    menu: {
        width: '100%'
    }
}))

const MainLayout = props =>{
    const classes = useStyles();

    const { children } = props;

    return(
        <Grid container direction="column" className={classes.root}>
            <Grid item className={classes.menu}>
                <NavigationBar/>
            </Grid>
            <Grid item className={classes.wrapper}>
                {children}
            </Grid>
        </Grid>
    )
}

export default MainLayout;