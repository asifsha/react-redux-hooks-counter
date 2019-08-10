import {combineReducers} from 'redux';
import counter from './counterReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
    counter,
    router: connectRouter(history)
  })
  
  export default rootReducer
