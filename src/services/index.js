import axios from 'axios'

const url = 'http://api.weatherstack.com/'
const ACCES_KEY = 'a82b615ef06c4648b1aa457f167402f8';

const services = {
    getWeatherByCityName(cityName){
        return axios.get(`${url}/current?access_key=${ACCES_KEY}&query=${cityName}`);
    },
    getCurrentLocation(){
        return axios.get('http://ip-api.com/json')
    }
};

export default services;