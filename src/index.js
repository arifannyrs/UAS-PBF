import React from 'react';
import ReactDOM from 'react-dom';
// import { firebaseApp } from './config';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer); 


ReactDOM.render(    
   <Provider store = {store}>
     <BrowserRouter>
         <App />
     </BrowserRouter>        
   </Provider>, 
 document.getElementById('root')
);

serviceWorker.unregister();
