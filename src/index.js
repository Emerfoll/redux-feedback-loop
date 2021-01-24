import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feedbackReducer = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_FEEDBACK':
            return {
                feeling: null,
                understanding: 0,
                support: 0,
                comments: 'comments'
            };
        case 'FEELING_FEEDBACK_ENTRY':
            state.feeling = action.payload
            return state;
        case 'UNDERSTANDING_FEEDBACK_ENTRY':
            state.understanding = action.payload
            return state;
        case 'SUPPORT_FEEDBACK_ENTRY':
            state.support = action.payload
            return state;
        case 'COMMENTS_FEEDBACK_ENTRY':
            state.comments = action.payload
            return state;
        default: return state;
    }
}




const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
