import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const useStyles = makeStyles (() =>({
    paper: {
        padding: 20,
        width: '50%',
        margin: 'auto',
    },
    image: {
        width: 128,
        height: 128,
    },
    
}))

const WeatherInfo = props =>{
    const classes = useStyles();

    const { weatherInfo } = props;
    const { isLoading } = props;
    const { setIsDialogOpen } = props;

    const { location, current } = weatherInfo;

    return(
        <Paper className={classes.paper}>
            {isLoading ?(
                <CircularProgress
                    size={100}
                />
            ):(
                current ? (
                    <Grid container direction="column">
                        <Grid item>
                            <img className={classes.image} alt="weather icon" src={current?.weather_icons[0]}/>
                        </Grid>
                        <Grid item>
                            <Grid container space={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h5">
                                        {location?.country}
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="h5">
                                        {current?.weather_descriptions}
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle1">
                                        Observation Time: {current?.observation_time}
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Tempreture: {current?.temperature}°C
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                       Feels Like: {current?.feelslike}°C
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Wind Speed: {current?.wind_speed} Knot
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Wind Degree: {current?.wind_degree}°
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Wind Direction: {current?.wind_dir}
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Pressure: {current?.pressure} Pa
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Precipitation: {current?.precip} millimeters
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Humidity: {current?.humidity}
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Cloud Cover: {current?.cloudcover}
                                    </Typography>
                                </Grid>               
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        UV Index: {current?.uv_index}
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="subtitle2">
                                        Visibility: {current?.visibility}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    <Grid item md={4} xs={12}>
                                        <IconButton size="medium" onClick={() => setIsDialogOpen(true)}>
                                            <LocationOnIcon/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                
            ) : (
                <Typography variant="h5">
                    Search for your City Name
                </Typography>
            )
            )}
            
        </Paper>
    );
    
}

export default WeatherInfo;