import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from './config/firebaseConfig';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="container spinner">
        <div className="text-center">
          <div
            className="sp sp-bars"
          >
          </div>
          <div style={{textAlign: 'center', color: 'white'}}>
            <h6>Loading...</h6>
          </div>
          
        </div>
      </div>
    );
  return children;
}


ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);
