import React from 'react';
import ReactDOM from 'react-dom';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './store/reducers';

import App from './App';

// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // {/* </Provider> */}
  ,
  document.getElementById('root')
);
