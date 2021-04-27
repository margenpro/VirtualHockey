import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers/userReducer'
import { videosReducer } from './reducers/videosReducer'

export default () => {
    return {
        ...createStore(
            combineReducers({

            
            userReducer,
            videosReducer, /* preloadedState, */
        }),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }
}