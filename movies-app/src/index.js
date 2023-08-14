import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore} from 'redux'
import './index.css';
import App from './components/App';
import movies from './reducers';
// import { createStore } from 'redux'; 

// creating STORE
export default function configStore(){
   const store = createStore(movies)
   return store; 
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


