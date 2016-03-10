import WeatherReducer from './reducer_weather';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;