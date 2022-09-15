import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

export const rootReducers = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})