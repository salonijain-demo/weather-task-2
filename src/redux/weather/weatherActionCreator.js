import { USER_GEOLOCATION, WEATHER_INFORMATION, SEARCH, NO_SEARCH, LOADING_DATA, WEATHER_REPORT } from './weatherActionType';

export const user_geolocation = (location) => {
  return{
    type: USER_GEOLOCATION,
    payload: location
  }
}

export const weather_information = (information) => {
  return{
    type: WEATHER_INFORMATION,
    payload: information
  }
}

export const search = (search) => {
  return{
    type: SEARCH,
    payload: search
  }
}

export const no_search = (error) => {
  return{
    type: NO_SEARCH,
    payload: error
  }
}

export const loadingData = () => {
  return{
    type: LOADING_DATA
  }
}

export const weatherReport = (weather) => {
  return{
    type: WEATHER_REPORT,
    paylaod: weather
  }
}