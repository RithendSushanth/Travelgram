import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';  // Default stylesheet
// import './dark-mode.css'


const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

const darkModeEnabled = JSON.parse(localStorage.getItem('darkMode'));
// Dynamically change the stylesheet link based on dark mode
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
if (darkModeEnabled) {
  styleLink.href = 'dark-mode.css';
} else {
  styleLink.href = 'index.css';
}

// Append the link to the head
document.head.appendChild(styleLink);

reportWebVitals();
