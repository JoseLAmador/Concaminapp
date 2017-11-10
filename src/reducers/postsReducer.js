import {combineReducers} from 'redux';

function allPosts(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

const postsReducer = combineReducers({allPosts});

export default postsReducer;