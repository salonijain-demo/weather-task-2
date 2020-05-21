import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import WeatherDashboard from './components/weatherDashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route exact path='/weatherDashboard' component={WeatherDashboard} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
