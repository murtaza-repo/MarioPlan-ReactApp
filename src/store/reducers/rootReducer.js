import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  project: projectReducer
});

export default rootReducer

// the key name will be the data property on the state object