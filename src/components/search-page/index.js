import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import SearchInput from './input-search';
import WeatherInfo from './weather-info'
import LocationDialog from './location-dialog';

const SearchPage = () => {
    const [currentWeatherInfo, setCurrentWeatherInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isDialogOpen , setIsDialogOpen] = useState(false)

    const onCloseDialog = () =>{
        setIsDialogOpen(false)
    }
    
    const {location} = currentWeatherInfo;
    return(
        <>
            <Grid container direction="column">
                <Grid item>
                    <SearchInput
                        setCurrentWeatherInfo={setCurrentWeatherInfo}
                        setIsLoading={setIsLoading}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid item>
                    <WeatherInfo
                        weatherInfo={currentWeatherInfo}
                        isLoading={isLoading}
                        setIsDialogOpen = {setIsDialogOpen}
                    />
                </Grid>
            </Grid>
            <LocationDialog
                open={isDialogOpen}
                handleClose={onCloseDialog}
                location={location}
            />
        </>
        
    )
}

export default SearchPage;