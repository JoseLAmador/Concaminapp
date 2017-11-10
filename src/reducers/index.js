import {combineReducers} from 'redux';
import PostReducer from "./PostReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    post:PostReducer,
    filter:filterReducer
});

export default rootReducer;