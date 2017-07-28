import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer // new object - weather - to be used in props
});

export default rootReducer;
