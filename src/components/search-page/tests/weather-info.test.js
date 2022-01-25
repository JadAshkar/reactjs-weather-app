import React from 'react'
import { shallow } from 'enzyme'

import WeatherInfo from '../weather-info'

import CircularProgress from'@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography';


describe('weather info loading', () => {
    let weatherInfo;
    const mockWeatherInfo = {
        location: {
            country: 'A',
        },
        current: {
            weather_icons: ['https://www.image.com'],
            weather_descriptions: ['B'],
            observation_time: 'C',
            temperature: 1,
            feelslike: 2,
            wind_speed: 3,
            wind_degree: 4,
            wind_dir: 'D',
            pressure: 5,
            precip: 6,
            humidity: 7,
            visibility: 8,
        },
    }

    const setIsDialogOpenMock = jest.fn()

    beforeEach(() => {
        weatherInfo = shallow(
            <WeatherInfo weatherInfo={{}} isLoading={true}/>
        );
    })

    it('should have circular progress',() => {
        expect(weatherInfo.find(CircularProgress)).toHaveLength(1)
        expect(weatherInfo.find(CircularProgress).at(0).prop('size')).toEqual(100)
    })

});

describe('weather info no data', () => {
    let weatherInfo;


    beforeEach(() => {
        weatherInfo = shallow(
            <WeatherInfo weatherInfo={{}} isLoading={false}/>
        );
    })

    it('should have circular progress',() => {
        expect(weatherInfo.find(CircularProgress)).toHaveLength(0)
        expect(weatherInfo.find(Typography)).toHaveLength(1)
    })

    it('should have no data to diaplay message',() => {
        expect(weatherInfo.find(Typography)).toHaveLength(1)
        expect(weatherInfo.find(Typography).at(0).prop('children')).toEqual('No data to display')
    })

});
