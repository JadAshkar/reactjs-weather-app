import React,{ useState, useEffect } from 'react'

//import { createBrowserHistory } from "history";

import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../state/action";
import { useLocation } from "react-router-dom";
import { setectCityWeather } from "../../state/selectors";

import services from '../../services'


import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar'

const useStyles = makeStyles(() =>({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    }
}));

const SearchInput  =(props) => {

    const { setCurrentWeatherInfo } = props;
    const { setIsLoading } = props;
    const {isLoading} = props; 

    const classes = useStyles();

    const dispatch = useDispatch();

    //const browserHistory = createBrowserHistory(); 

    const [ cityName, setCityName ] = useState('');
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackBarMessage, SetSnackBarMessage] = useState('')

    const onCityNameChange = (event) =>{
        setCityName(event.target.value)
    }

    const getCityCurrentWeather = (cityName) => {
        setIsLoading(true);
        services.getWeatherByCityName(cityName)
            .then((response) =>{
                const {data} = response;
                if(!data.error){
                    setCurrentWeatherInfo(data);
                }
                else{
                    setIsSnackbarOpen(true);
                    const errorMessage = data.error.info
                    SetSnackBarMessage(errorMessage)
                }
            })
            .finally( () => {
                setIsLoading(false)
            })
    }

    const onButtonClick = () => {
        //browserHistory.push('/test-url');
        getCityCurrentWeather(cityName);
        sessionStorage.WEATHER_APP_CITY_NAME = cityName;
        dispatch(addCity(cityName));

        if(sessionStorage.WEATHER_APP_CITIES){
            const cities = JSON.parse(sessionStorage.WEATHER_APP_CITIES)
            cities.push(cityName)
            sessionStorage.WEATHER_APP_CITIES = JSON.stringify(cities)
        } else {
            const cities = []
            sessionStorage.WEATHER_APP_CITIES = JSON.stringify(cities)
        }

        if(localStorage.WEATHER_APP_CITIES){
            const cities = JSON.parse(localStorage.WEATHER_APP_CITIES)
            cities.push(cityName)
            localStorage.WEATHER_APP_CITIES = JSON.stringify(cities)
        } else {
            const cities = []
            localStorage.WEATHER_APP_CITIES = JSON.stringify(cities)
        }
    }

    const onSnackbarClose = () =>{
        setIsSnackbarOpen(false)
    }

    const getCurrentCityName = () => {
        setIsLoading(true);
        services.getCurrentLocation()
            .then((response) =>{
                const currentCity = response?.data?.city;
                setCityName(currentCity);
                getCityCurrentWeather(currentCity);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const searchParams = new URLSearchParams(useLocation().search)
    const cityParam = searchParams.get('city')

    const reduxCityWeather = useSelector(setectCityWeather)

    useEffect(() => {
        if(reduxCityWeather){
            setCityName(reduxCityWeather.location.name)
            setCurrentWeatherInfo(reduxCityWeather)
        }
        else if(cityParam){
            setCityName(cityParam)
            getCityCurrentWeather(cityParam)
        }
        else if(sessionStorage.WEATHER_APP_CITY_NAME) {
            const storedCity = sessionStorage.WEATHER_APP_CITY_NAME;
            setCityName(storedCity);
            getCityCurrentWeather(storedCity);
        }
        else{
            getCurrentCityName();
        }
    }, [cityParam, reduxCityWeather])



    return(
        <>
            < Grid container spacing={3} className={classes.root}>
                <Grid item md={11} xs={12}>
                    <TextField
                        label = "City"
                        variant = "outlined"
                        placeholder = "Type city name here"
                        fullWidth = {true}
                        value = {cityName}
                        onChange = {onCityNameChange}
                    />
                </Grid >
                <Grid item md={1}>
                    <Button
                        variant = "contained"
                        onClick = {onButtonClick}
                        color = "primary"
                        disabled={isLoading}
                    >
                        search
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin = {{
                    vertical: 'top',
                    horizontal: 'right',

                }}
                open = {isSnackbarOpen}
                onClose = {onSnackbarClose}
                message = {snackBarMessage}
                autoHideDuration = {3000}
            />
        </>
    )
}

export default SearchInput;