
import { all, takeLatest, put } from 'redux-saga/effects'

import { getCityWeatherSuccess, GET_CITY_WEATHER } from "./action";

import services from '../services'

export function* fetchCityWeather(action) {
    const city = action.payload;
    const response = yield services.getWeatherByCityName(city)
    yield put(getCityWeatherSuccess(response.data))
}

export default function* watchAll() {
    yield all ([
        takeLatest(
            GET_CITY_WEATHER,
            fetchCityWeather,
        )
    ])
}