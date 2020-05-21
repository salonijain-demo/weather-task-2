import React, {Component} from 'react';
import './search.css';
import {connect} from 'react-redux';
import {getSearchLocation} from '../redux';

class Search extends Component{
  state={
    search: ''
  }
  search = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  getSearch = () => {
    this.props.getSearch(this.state.search)
  }
  render(){
    return(
      <div>
        <div className='col-lg-12 weather-header'>
          <h1>Weather Forecast</h1>
          <input disabled={this.props.loading} type='text' name='search' value={this.state.search} onChange={this.search} placeholder='search by city'></input>
          <button disabled={this.props.loading} className='btn btn-primary' onClick={this.getSearch}>search</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading
})

const mapDispatchToProps = {
  getSearch: getSearchLocation
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)
