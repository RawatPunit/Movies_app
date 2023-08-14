import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore} from 'redux'
import './index.css';
import App from './components/App';
import movies from './reducers';
// import { createStore } from 'redux'; 

// creating STORE
export default function configStore(){
   const store = createStore(movies)        //movie from the  reducer
   return store; 
}
console.log('BEFORE STATE',  store.getState());     //basically will be an empty array

store.dispatch({
  tpe  : 'ADD_MOVIES',
  movies : [{name : 'Superman'}]
})
console.log('AFTER STATE',  store.getState());      //gets the data with movie named SUperman


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


