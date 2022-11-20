import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todosReducer } from './reducer/todosReducer'
import { tabReducer } from './reducer/tabReducer';

const reducer = combineReducers({
    todos: todosReducer,
    currentTab: tabReducer
})

//middleware
const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    
)

export default store;