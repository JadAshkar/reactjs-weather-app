
import { ADD_CITY, GET_CITY_WEATHER_SUCCESS } from "./action";


const initialState ={
    cities: [],
    cityWeather: null,
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_CITY:     
            const newCities =  [...state.cities];
            newCities.push(action.payload)
            return {...state, cities: newCities};
        case GET_CITY_WEATHER_SUCCESS:
            return { ...state, cityWeather: action.payload };
        default:
            return state;
    }
}

export default reducer;