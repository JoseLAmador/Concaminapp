import firebase from '../../components/firebase/Firebase'
import {POST_FETCH_SUCCESS} from './types';

export const postFetch = () =>{
    return (dispatch) => {
        firebase.database().ref(`/postP`)
            .on('value', snapshot =>{
                dispatch({type: POST_FETCH_SUCCESS, payload: snapshot.val()})
            });
    }
};