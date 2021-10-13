import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <React.StrictMode>
            <PersistGate persistor={persistor}>
               <App />
            </PersistGate>
         </React.StrictMode>
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);
