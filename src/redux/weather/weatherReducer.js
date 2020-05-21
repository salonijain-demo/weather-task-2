import {USER_GEOLOCATION, WEATHER_INFORMATION, SEARCH, NO_SEARCH, LOADING_DATA, WEATHER_REPORT} from './weatherActionType';

const initalState={
  username: 'weather@gmail.com',
  password: 'weather',
  userLatitude: '',
  userLongitude: '',
  weatherInformation: [],
  searchInformation:[],
  weatherReport: [],
  loading: false,
  noSearch:''
}

const Reducer = (state=initalState, action) => {
  switch(action.type){
    case LOADING_DATA:
    return{
      ...state,
      loading:true
    }
    case USER_GEOLOCATION:
    return{
      ...state,
      loading: false
    //   userLatitude: action.payload.location.latitude,
    //   userLongitude: action.payload.location.longitude
    }
    case WEATHER_INFORMATION:
    return{
      ...state,
      loading: false,
      weatherInformation: action.payload
    }
    case WEATHER_REPORT:
    return{
      ...state,
      loading: false,
      weatherReport: action.payload
    }
    case SEARCH:
    return{
      ...state,
      loading: false,
      searchInformation: action.payload
    }
    case NO_SEARCH:
    return{
      ...state,
      loading: false,
      noSearch: 'SEARCH NOT FOUND - Enter specific city name'
    }
    default: return state
  }
}

export default Reducer;