import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { reducer, INITAL_STATE } from './app/RootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'rxjs'; // um Observable mit allen Methoden aus redux-obervable zu erweitern
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(reducer, INITAL_STATE,
    composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root') as HTMLElement
);
