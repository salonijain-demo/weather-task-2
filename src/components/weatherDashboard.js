import React, { Component } from 'react'
import Search from './search';
import {getUserLocation, getWeatherReport} from '../redux';
import {connect} from 'react-redux';
import './search.css';
import Tables from '../containers/Table';

class WeatherDashboard extends Component{
  state = {
    data: {"distance":343898,"title":"Ahmedabad","location_type":"City","woeid":2295402,"latt_long":"23.030199,72.569870"},
    weather: [{"id":6078927845982208,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"NW","created":"2020-05-20T13:31:25.363852Z","applicable_date":"2020-05-20","min_temp":30.635,"max_temp":44.57,"the_temp":44.33,"wind_speed":7.579232511307299,"wind_direction":305.32192997875893,"air_pressure":1002.5,"humidity":22,"visibility":12.839703630796151,"predictability":68},{"id":4736876999081984,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"WNW","created":"2020-05-20T13:31:28.367957Z","applicable_date":"2020-05-21","min_temp":27.94,"max_temp":44.28,"the_temp":42.22,"wind_speed":6.244554911800418,"wind_direction":285.17295734777383,"air_pressure":1005.0,"humidity":22,"visibility":12.482725880855803,"predictability":68},{"id":5333387290083328,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"W","created":"2020-05-20T13:31:31.624168Z","applicable_date":"2020-05-22","min_temp":26.545,"max_temp":44.06,"the_temp":42.035,"wind_speed":6.358670399724278,"wind_direction":273.31312748020673,"air_pressure":1006.0,"humidity":25,"visibility":12.45041457885946,"predictability":68},{"id":5515977892560896,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"WNW","created":"2020-05-20T13:31:34.431992Z","applicable_date":"2020-05-23","min_temp":26.810000000000002,"max_temp":44.025,"the_temp":42.135,"wind_speed":5.890625767684722,"wind_direction":286.1841461052156,"air_pressure":1006.5,"humidity":26,"visibility":12.406607909806729,"predictability":68},{"id":6186136319819776,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"WNW","created":"2020-05-20T13:31:37.268274Z","applicable_date":"2020-05-24","min_temp":26.884999999999998,"max_temp":44.129999999999995,"the_temp":42.57,"wind_speed":6.240126451634455,"wind_direction":293.8325333552308,"air_pressure":1006.5,"humidity":24,"visibility":12.367150839099658,"predictability":68}]
  }
  componentDidMount(){
    this.props.getUserLocation()
    this.props.weatherReport(this.state.data.woeid)
  }
  render(){
    return(
      <div>
        <div className='search-field'><Search /></div>
        {this.props.loading ? <div className='spin'></div>: null}
        {this.props.search}
        <Tables city={this.state.data.title} weather={this.state.weather}/>
        {this.props.weather}
        {this.props.noSearch}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    weather:state.weatherInformation,
    search: state.searchInformation,
    noSearch: state.noSearch,
    weatherReport: state.weatherReport,
    loading: state.loading
  }
}

const mapDispatchToProps = {
  getUserLocation: getUserLocation,
  weatherReport: getWeatherReport
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDashboard)