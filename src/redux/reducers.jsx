import { combineReducers } from 'redux';
import {
    INIT_DATA
} from './action';

const INITALL={
    xArr:[1,2,3]
}

function initData(state = INITALL, {type,payload}){
    switch(type){
        case INIT_DATA:
        return payload.data
        default:
        return state.xArr
    }
} 

const rootReducer = combineReducers({
    initData
})

export default rootReducer;