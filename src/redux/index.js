import Axios from 'axios';
import {user_geolocation, weather_information, search, no_search, loadingData,weatherReport} from './weather/weatherActionCreator';
import {get_user_geolocation,get_search_location,get_weather_report} from '../api';

export const getUserLocation = () => {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        dispatch(user_geolocation(location))
        dispatch(loadingData())
        Axios.get(`${get_user_geolocation}${location.latitude},${location.longitude}`)
        .then(res=>{
          const information = res.data
          dispatch(weather_information(information))
        })
      })
  }
}
  
export const getSearchLocation = (search) => {
  return dispatch => {
    dispatch(loadingData())
    Axios.get(`${get_search_location}${search}`)
    .then(res =>{
      const search = res.data
      dispatch(search(search))
    })
    .catch(error=>{
      dispatch(no_search())
    })
  }
}

export const getWeatherReport = (woeid) => {
    return dispatch => {
      dispatch(loadingData())
      Axios.get(`${get_weather_report}${woeid}/`)
      .then(res=>{
        const  weather= res.data
        dispatch(weatherReport(weather))
      })
    }
  }