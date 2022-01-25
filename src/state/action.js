export const ADD_CITY = "ADD_CITY";
export const addCity = city => ({
    type: ADD_CITY,
    payload: city,
});

export const GET_CITY_WEATHER = "GET_CITY_WEATHER";
export const getCityWeather = city => ({
    type: GET_CITY_WEATHER,
    payload: city,
});

export const GET_CITY_WEATHER_SUCCESS = "GET_CITY_WEATHER_SUCCESS";
export const getCityWeatherSuccess = cityWeatherResponse => ({
    type: GET_CITY_WEATHER_SUCCESS,
    payload: cityWeatherResponse,
})